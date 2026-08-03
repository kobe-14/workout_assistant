import { MUSCLE_LIST } from '../data/muscles'
import type { Difficulty, MuscleId, MuscleInfo } from '../data/muscles'

const DIFFICULTY_CLASS: Record<Difficulty, string> = {
  Beginner: 'badge badge-beginner',
  Intermediate: 'badge badge-intermediate',
  Advanced: 'badge badge-advanced',
}

interface InfoPanelProps {
  muscle: MuscleInfo | null
  onSelect: (id: MuscleId | null) => void
}

export default function InfoPanel({ muscle, onSelect }: InfoPanelProps) {
  if (!muscle) {
    return (
      <aside className="panel">
        <div className="panel-header">
          <h2>Explore the anatomy</h2>
          <p className="panel-sub">
            Click a muscle group on the 3D model — or pick one below — to see the
            best exercises and their variations.
          </p>
        </div>
        <div className="muscle-grid">
          {MUSCLE_LIST.map((m) => (
            <button key={m.id} type="button" className="muscle-card" onClick={() => onSelect(m.id)}>
              <span className="dot" style={{ background: m.color }} />
              <span className="muscle-card-name">{m.name}</span>
              <span className="muscle-card-tagline">{m.tagline}</span>
            </button>
          ))}
        </div>
      </aside>
    )
  }

  return (
    <aside className="panel">
      <div className="panel-header" style={{ borderColor: muscle.color }}>
        <button type="button" className="back-btn" onClick={() => onSelect(null)}>
          ← All muscles
        </button>
        <h2>
          <span className="dot" style={{ background: muscle.color }} />
          {muscle.name}
        </h2>
        <p className="panel-sub">{muscle.tagline}</p>
        <p className="panel-desc">{muscle.description}</p>
      </div>

      <div className="exercise-list">
        {muscle.exercises.map((ex, i) => (
          <article key={ex.name} className="exercise-card" style={{ borderLeftColor: muscle.color }}>
            <header className="exercise-head">
              <span className="exercise-index">{i + 1}</span>
              <div>
                <h3>{ex.name}</h3>
                <p className="exercise-sets">{ex.sets}</p>
              </div>
            </header>
            <p className="exercise-desc">{ex.description}</p>

            <p className="variations-label">Variations</p>
            <ul className="variation-list">
              {ex.variations.map((v) => (
                <li key={v.name} className="variation">
                  <div className="variation-top">
                    <span className="variation-name">{v.name}</span>
                    <span className={DIFFICULTY_CLASS[v.difficulty]}>{v.difficulty}</span>
                  </div>
                  <p className="variation-equipment">{v.equipment}</p>
                  <p className="variation-cue">💡 {v.cue}</p>
                  <button type="button" className="video-btn video-btn-sm" aria-label={`Watch video for ${v.name} (coming soon)`}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 7l-7 5 7 5V7z" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                    <span>Watch video</span>
                    <span className="soon-pill">Coming soon</span>
                  </button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </aside>
  )
}
