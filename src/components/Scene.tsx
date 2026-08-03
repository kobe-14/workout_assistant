import type { RefObject } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import HumanModel from './HumanModel'
import type { MuscleId } from '../data/muscles'

interface SceneProps {
  selected: MuscleId | null
  hovered: MuscleId | null
  rotation: number
  controlsRef: RefObject<OrbitControlsImpl | null>
  onSelect: (id: MuscleId | null) => void
  onHover: (id: MuscleId | null) => void
  onReady: () => void
}

export default function Scene({ selected, hovered, rotation, controlsRef, onSelect, onHover, onReady }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0.6, 1.15, 3.0], fov: 38 }}
      onPointerMissed={() => onSelect(null)}
    >
      <color attach="background" args={['#0b0e14']} />

      {/* Lighting: warm key + cool rim + ambient fill */}
      <hemisphereLight args={['#8ea2c0', '#1a1d24', 0.55]} />
      <directionalLight position={[2.5, 3.5, 3]} intensity={1.4} color="#fff2e6" />
      <directionalLight position={[-3, 2, -2.5]} intensity={0.5} color="#7ea8ff" />

      <HumanModel
        selected={selected}
        hovered={hovered}
        rotation={rotation}
        onSelect={onSelect}
        onHover={onHover}
        onReady={onReady}
      />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]}>
        <circleGeometry args={[1.4, 48]} />
        <meshStandardMaterial color="#141822" roughness={0.9} />
      </mesh>
      <ContactShadows position={[0, 0.001, 0]} opacity={0.65} scale={3} blur={2.5} far={2} color="#000000" />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        target={[0, 0.9, 0]}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.9}
        minDistance={1.2}
        maxDistance={5}
        minPolarAngle={0.25}
        maxPolarAngle={Math.PI * 0.62}
      />
    </Canvas>
  )
}
