# Z-Axis Fit

An interactive 3D anatomy-based training guide. Explore a real 3D model of the
human muscular system, click any muscle group, and learn the best exercises and
their variations for it — with equipment, difficulty, and coaching cues.

## Features

- **Real 3D anatomy** — a detailed écorché model of the human muscular system,
  with 14 clickable, color-coded muscle groups: chest, shoulders, biceps,
  triceps, forearms, abs, obliques, traps, back, glutes, quads, adductors,
  hamstrings, calves.
- **Click-to-learn** — selecting a muscle opens its panel: anatomy notes,
  3 key exercises (with sets/reps), and 3 variations per exercise
  (equipment, difficulty badge, coaching cue). 130+ variations in total.
- **Drag to rotate** — orbit the model freely; Front / Back shortcuts snap the
  model to the most informative view for the selected muscle.
- **Workout videos** — placeholder "Watch video" buttons on every exercise and
  variation (coming soon).
- Hover highlighting with name tag, muscle chips for keyboard-free selection,
  responsive layout that adapts to mobile screens.

## Stack

- React 19 + TypeScript + Vite
- three.js + @react-three/fiber + @react-three/drei
- Asset pipeline: Blender (headless FBX → GLB conversion, mesh joining,
  decimation) + gltf-transform (prune + quantization)

## Scripts

```bash
npm run dev     # start dev server
npm run build   # type-check + production build
npm run lint    # oxlint
```

## 3D model attribution

The anatomy model shipped in `public/models/anatomy.glb` is derived from the
**[Z-Anatomy](https://www.z-anatomy.com)** project by **Lluís Vinent Juanico**
(source FBX: [github.com/LluisV/Z-Anatomy](https://github.com/LluisV/Z-Anatomy)),
licensed under **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**.

Changes made: the ~690 individual muscle meshes were joined into 14 training
muscle groups (+ a neutral "body" mesh of the remaining muscles), decimated,
normalized to 1.75 m height, recalculated to consistent outward normals, and
quantized to KHR_mesh_quantization.
