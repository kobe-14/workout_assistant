import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ThreeEvent } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import type { Group, Mesh, Object3D } from 'three'
import { MUSCLES, MUSCLE_LIST } from '../data/muscles'
import type { MuscleId } from '../data/muscles'

const MODEL_URL = '/models/anatomy.glb'
const BODY_COLOR = '#2b313d'

const GROUP_IDS = new Set<string>(MUSCLE_LIST.map((m) => m.id))

/** Walk up the hierarchy to find which muscle group a mesh belongs to */
function resolveGroup(obj: Object3D | null): MuscleId | 'body' | null {
  let cur: Object3D | null = obj
  while (cur) {
    if (GROUP_IDS.has(cur.name)) return cur.name as MuscleId
    if (cur.name === 'body') return 'body'
    cur = cur.parent
  }
  return null
}

useGLTF.preload(MODEL_URL)

interface HumanModelProps {
  selected: MuscleId | null
  hovered: MuscleId | null
  rotation: number
  onSelect: (id: MuscleId | null) => void
  onHover: (id: MuscleId | null) => void
  onReady: () => void
}

export default function HumanModel({ selected, hovered, rotation, onSelect, onHover, onReady }: HumanModelProps) {
  const group = useRef<Group>(null)
  const { scene } = useGLTF(MODEL_URL)

  // Assign one material per muscle group (shared across its primitives)
  const materials = useMemo(() => {
    const map = new Map<MuscleId | 'body', MeshStandardMaterial>()

    const materialFor = (id: MuscleId | 'body') => {
      const existing = map.get(id)
      if (existing) return existing
      const color = id === 'body' ? BODY_COLOR : MUSCLES[id].color
      const mat = new MeshStandardMaterial({
        color,
        roughness: id === 'body' ? 0.7 : 0.45,
        metalness: 0.08,
        emissive: id === 'body' ? '#000000' : color,
        emissiveIntensity: 0.12,
      })
      map.set(id, mat)
      return mat
    }

    scene.traverse((obj) => {
      if ((obj as Mesh).isMesh) {
        const id = resolveGroup(obj)
        if (id) (obj as Mesh).material = materialFor(id)
      }
    })
    return map
  }, [scene])

  // Reflect hover/selection through emissive glow
  useEffect(() => {
    materials.forEach((mat, id) => {
      if (id === 'body') return
      mat.emissiveIntensity = id === selected ? 0.85 : id === hovered ? 0.45 : 0.12
    })
  }, [materials, selected, hovered])

  useEffect(() => {
    onReady()
  }, [onReady])

  // Smoothly rotate the model to the requested angle (shortest path)
  useFrame((_, delta) => {
    const g = group.current
    if (!g) return
    const twoPi = Math.PI * 2
    const diff = ((((rotation - g.rotation.y) % twoPi) + twoPi * 1.5) % twoPi) - Math.PI
    g.rotation.y += diff * Math.min(1, delta * 5)
  })

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    const id = resolveGroup(e.object)
    if (id && id !== 'body') {
      e.stopPropagation()
      onSelect(id)
    } else {
      onSelect(null) // clicked non-muscle body: deselect
    }
  }

  const handleOver = (e: ThreeEvent<PointerEvent>) => {
    const id = resolveGroup(e.object)
    if (id && id !== 'body') {
      e.stopPropagation()
      onHover(id)
    }
  }

  return (
    <group ref={group}>
      <primitive
        object={scene}
        rotation={[0, Math.PI, 0]}
        onClick={handleClick}
        onPointerOver={handleOver}
        onPointerOut={() => onHover(null)}
      />
    </group>
  )
}
