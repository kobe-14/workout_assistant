import { useEffect, useRef, useState } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import Scene from './components/Scene'
import InfoPanel from './components/InfoPanel'
import { MUSCLES, MUSCLE_LIST } from './data/muscles'
import type { MuscleId } from './data/muscles'
import './App.css'

function App() {
  const [selectedId, setSelectedId] = useState<MuscleId | null>(null)
  const [hoveredId, setHoveredId] = useState<MuscleId | null>(null)
  const [rotation, setRotation] = useState(0)
  const [ready, setReady] = useState(false)
  const controlsRef = useRef<OrbitControlsImpl | null>(null)

  // Pointing cursor over interactive muscles
  useEffect(() => {
    document.body.style.cursor = hoveredId ? 'pointer' : 'auto'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hoveredId])

  const handleSelect = (id: MuscleId | null) => {
    if (id === null) {
      setSelectedId(null)
      return
    }
    const isNew = selectedId !== id
    setSelectedId(isNew ? id : null)
    if (isNew) {
      const view = MUSCLES[id].view
      // Z-Anatomy GLB's front faces -Z, so the rotation needed to *show* a side
      // is π + the conventional Y rotation:
      if (view === 'front') setRotation(0)
      else if (view === 'back') setRotation(Math.PI)
      else if (view === 'side') setRotation(Math.PI / 2)
      // 'any' keeps the current angle
    }
  }

  const selected = selectedId ? MUSCLES[selectedId] : null
  const hovered = hoveredId ? MUSCLES[hoveredId] : null

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">◈</span>
          <div>
            <h1>Z-Axis Fit</h1>
            <p>Interactive anatomy-based training guide</p>
          </div>
        </div>
      </header>

      <nav className="chips" aria-label="Muscle groups">
        {MUSCLE_LIST.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`chip${selectedId === m.id ? ' chip-active' : ''}`}
            onClick={() => handleSelect(m.id)}
          >
            <span className="dot" style={{ background: m.color }} />
            {m.name}
          </button>
        ))}
      </nav>

      <main className="layout">
        <section className="viewport">
          <Scene
            selected={selectedId}
            hovered={hoveredId}
            rotation={rotation}
            controlsRef={controlsRef}
            onSelect={handleSelect}
            onHover={setHoveredId}
            onReady={() => setReady(true)}
          />

          {!ready && (
            <div className="loading">
              <span className="loading-spinner" />
              Loading anatomy model…
            </div>
          )}

          <div className="toolbar">
            <button type="button" onClick={() => setRotation(0)}>Front</button>
            <button type="button" onClick={() => setRotation(Math.PI)}>Back</button>
          </div>

          {hovered && (
            <div className="hover-tag" style={{ borderColor: hovered.color }}>
              <span className="dot" style={{ background: hovered.color }} />
              {hovered.name}
            </div>
          )}

          <p className="hint">Drag to rotate · Scroll to zoom · Click a muscle</p>
        </section>

        <InfoPanel muscle={selected} onSelect={handleSelect} />
      </main>

      <footer className="app-footer">
        3D anatomy model:{' '}
        <a href="https://www.z-anatomy.com" target="_blank" rel="noreferrer">
          Z-Anatomy
        </a>{' '}
        by Lluís Vinent Juanico, licensed{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">
          CC BY-SA 4.0
        </a>
      </footer>
    </div>
  )
}

export default App
