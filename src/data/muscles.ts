export type MuscleId =
  | 'chest'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'forearms'
  | 'abs'
  | 'obliques'
  | 'traps'
  | 'lats'
  | 'glutes'
  | 'quads'
  | 'adductors'
  | 'hamstrings'
  | 'calves'

/** Which side of the body the muscle is best viewed from */
export type MuscleView = 'front' | 'back' | 'side' | 'any'

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Variation {
  name: string
  equipment: string
  difficulty: Difficulty
  /** One-line coaching cue */
  cue: string
}

export interface Exercise {
  name: string
  sets: string
  description: string
  variations: Variation[]
}

export interface MuscleInfo {
  id: MuscleId
  name: string
  tagline: string
  /** Accent color used in the 3D model + UI */
  color: string
  view: MuscleView
  description: string
  exercises: Exercise[]
}

export const MUSCLES: Record<MuscleId, MuscleInfo> = {
  chest: {
    id: 'chest',
    name: 'Chest',
    tagline: 'Pectoralis major & minor',
    color: '#ef5350',
    view: 'front',
    description:
      'The pecs press weight away from your body and hug the arms across the torso. Train a mix of flat and incline angles to cover the lower and upper fibers.',
    exercises: [
      {
        name: 'Bench Press',
        sets: '3–4 sets · 6–10 reps',
        description:
          'The foundational horizontal press for overall chest mass and pressing strength.',
        variations: [
          {
            name: 'Flat Barbell Bench Press',
            equipment: 'Barbell + bench',
            difficulty: 'Intermediate',
            cue: 'Retract your shoulder blades and drive your feet into the floor.',
          },
          {
            name: 'Incline Dumbbell Press',
            equipment: 'Dumbbells + incline bench',
            difficulty: 'Intermediate',
            cue: 'Set the bench to 30–45° and press the dumbbells slightly inward.',
          },
          {
            name: 'Push-Up',
            equipment: 'Bodyweight',
            difficulty: 'Beginner',
            cue: 'Keep a straight line from head to heels; elbows at ~45°.',
          },
        ],
      },
      {
        name: 'Chest Fly',
        sets: '3 sets · 10–15 reps',
        description:
          'An isolation movement that stretches and squeezes the pecs without triceps taking over.',
        variations: [
          {
            name: 'Cable Fly (high to low)',
            equipment: 'Cable station',
            difficulty: 'Intermediate',
            cue: 'Sweep the handles down and together like hugging a tree.',
          },
          {
            name: 'Dumbbell Fly',
            equipment: 'Dumbbells + bench',
            difficulty: 'Intermediate',
            cue: 'Soft elbows, lower slowly until you feel a deep stretch.',
          },
          {
            name: 'Pec Deck Machine',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Pause for a full second with the handles together.',
          },
        ],
      },
      {
        name: 'Dips (Chest Version)',
        sets: '3 sets · 8–12 reps',
        description:
          'A bodyweight press that hammers the lower pecs when you lean your torso forward.',
        variations: [
          {
            name: 'Parallel Bar Dips',
            equipment: 'Dip station',
            difficulty: 'Advanced',
            cue: 'Lean forward ~30° and flare elbows slightly to bias the chest.',
          },
          {
            name: 'Assisted Dips',
            equipment: 'Assisted dip machine / band',
            difficulty: 'Beginner',
            cue: 'Control the negative for 2–3 seconds on every rep.',
          },
          {
            name: 'Weighted Dips',
            equipment: 'Dip belt + plates',
            difficulty: 'Advanced',
            cue: 'Add load only once you can hit 12 clean bodyweight reps.',
          },
        ],
      },
    ],
  },

  shoulders: {
    id: 'shoulders',
    name: 'Shoulders',
    tagline: 'Deltoids — front, side & rear',
    color: '#ff9800',
    view: 'any',
    description:
      'The deltoids cap the shoulder joint and lift your arms in every direction. Balanced training hits all three heads: front (presses), side (lateral raises), and rear (flyes).',
    exercises: [
      {
        name: 'Overhead Press',
        sets: '3–4 sets · 6–10 reps',
        description:
          'The main compound lift for shoulder size and strength, emphasizing the front delts.',
        variations: [
          {
            name: 'Standing Barbell Press',
            equipment: 'Barbell',
            difficulty: 'Intermediate',
            cue: 'Squeeze your glutes and press the bar in a straight vertical line.',
          },
          {
            name: 'Seated Dumbbell Press',
            equipment: 'Dumbbells + bench',
            difficulty: 'Beginner',
            cue: 'Start with dumbbells at ear height, press without clanking at the top.',
          },
          {
            name: 'Arnold Press',
            equipment: 'Dumbbells',
            difficulty: 'Intermediate',
            cue: 'Rotate palms from facing you to facing out as you press.',
          },
        ],
      },
      {
        name: 'Lateral Raise',
        sets: '3–4 sets · 12–20 reps',
        description:
          'Isolates the side delts — the muscle responsible for shoulder width and the "capped" look.',
        variations: [
          {
            name: 'Dumbbell Lateral Raise',
            equipment: 'Dumbbells',
            difficulty: 'Beginner',
            cue: 'Lead with your elbows and stop at shoulder height.',
          },
          {
            name: 'Cable Lateral Raise',
            equipment: 'Cable station',
            difficulty: 'Intermediate',
            cue: 'Stand side-on to the stack and lift across your body.',
          },
          {
            name: 'Machine Lateral Raise',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Use a controlled tempo — 2 seconds up, 3 seconds down.',
          },
        ],
      },
      {
        name: 'Rear Delt Fly',
        sets: '3 sets · 12–15 reps',
        description:
          'Targets the often-neglected rear delts, improving posture and shoulder health.',
        variations: [
          {
            name: 'Bent-Over Dumbbell Fly',
            equipment: 'Dumbbells',
            difficulty: 'Intermediate',
            cue: 'Hinge at the hips, spread arms wide like wings.',
          },
          {
            name: 'Reverse Pec Deck',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Keep a slight bend in the elbows and squeeze the shoulder blades.',
          },
          {
            name: 'Face Pull',
            equipment: 'Cable + rope',
            difficulty: 'Beginner',
            cue: 'Pull the rope to your forehead, ending in a "double biceps" pose.',
          },
        ],
      },
    ],
  },

  biceps: {
    id: 'biceps',
    name: 'Biceps',
    tagline: 'Biceps brachii & brachialis',
    color: '#ffca28',
    view: 'front',
    description:
      'The biceps flex the elbow and supinate the wrist. Vary your grip — supinated, neutral, and angled — to hit both heads of the biceps plus the underlying brachialis.',
    exercises: [
      {
        name: 'Barbell Curl',
        sets: '3 sets · 8–12 reps',
        description:
          'The classic mass-builder that lets you load the biceps heavier than any other curl.',
        variations: [
          {
            name: 'Straight Bar Curl',
            equipment: 'Barbell',
            difficulty: 'Beginner',
            cue: 'Pin your elbows to your ribs and curl without swinging.',
          },
          {
            name: 'EZ-Bar Curl',
            equipment: 'EZ curl bar',
            difficulty: 'Beginner',
            cue: 'The angled grip is easier on the wrists — great for higher volume.',
          },
          {
            name: 'Reverse Curl',
            equipment: 'Barbell, overhand grip',
            difficulty: 'Intermediate',
            cue: 'Palms down shifts work to the brachialis and forearms.',
          },
        ],
      },
      {
        name: 'Dumbbell Curl',
        sets: '3 sets · 10–12 reps',
        description:
          'Unilateral curls fix left/right imbalances and allow a natural wrist rotation.',
        variations: [
          {
            name: 'Alternating Curl',
            equipment: 'Dumbbells',
            difficulty: 'Beginner',
            cue: 'Supinate (rotate palm up) as you curl past halfway.',
          },
          {
            name: 'Hammer Curl',
            equipment: 'Dumbbells, neutral grip',
            difficulty: 'Beginner',
            cue: 'Thumbs up grip thickens the brachialis and forearm.',
          },
          {
            name: 'Incline Dumbbell Curl',
            equipment: 'Dumbbells + incline bench',
            difficulty: 'Intermediate',
            cue: 'Let the arms hang behind the torso for a huge stretch.',
          },
        ],
      },
      {
        name: 'Preacher Curl',
        sets: '3 sets · 10–15 reps',
        description:
          'Bracing the upper arm against a pad kills momentum and isolates the peak of the curl.',
        variations: [
          {
            name: 'EZ-Bar Preacher Curl',
            equipment: 'Preacher bench + EZ bar',
            difficulty: 'Intermediate',
            cue: 'Stop just short of lockout at the bottom to keep tension on.',
          },
          {
            name: 'Single-Arm Dumbbell Preacher Curl',
            equipment: 'Dumbbell + preacher bench',
            difficulty: 'Intermediate',
            cue: 'Squeeze hard at the top for a full second.',
          },
          {
            name: 'Cable Preacher Curl',
            equipment: 'Cable + preacher bench',
            difficulty: 'Intermediate',
            cue: 'Cables keep constant tension through the whole range.',
          },
        ],
      },
    ],
  },

  triceps: {
    id: 'triceps',
    name: 'Triceps',
    tagline: 'Triceps brachii — 3 heads',
    color: '#9ccc65',
    view: 'back',
    description:
      'The triceps make up roughly two-thirds of your upper arm and extend the elbow. Overhead moves stretch the long head; pressdowns and dips hammer all three heads.',
    exercises: [
      {
        name: 'Triceps Pushdown',
        sets: '3–4 sets · 10–15 reps',
        description:
          'A joint-friendly isolation staple that keeps constant tension on the triceps.',
        variations: [
          {
            name: 'Rope Pushdown',
            equipment: 'Cable + rope',
            difficulty: 'Beginner',
            cue: 'Split the rope apart at the bottom for an extra squeeze.',
          },
          {
            name: 'Straight-Bar Pushdown',
            equipment: 'Cable + bar',
            difficulty: 'Beginner',
            cue: 'Elbows glued to your sides — only the forearms move.',
          },
          {
            name: 'Single-Arm Reverse Pushdown',
            equipment: 'Cable, underhand grip',
            difficulty: 'Intermediate',
            cue: 'Underhand grip biases the medial head; go light.',
          },
        ],
      },
      {
        name: 'Overhead Extension',
        sets: '3 sets · 10–12 reps',
        description:
          'Stretching the long head overhead is key for complete triceps development.',
        variations: [
          {
            name: 'Overhead Dumbbell Extension',
            equipment: 'Dumbbell',
            difficulty: 'Intermediate',
            cue: 'Keep elbows pointing forward, lower behind your head.',
          },
          {
            name: 'Cable Overhead Extension',
            equipment: 'Cable + rope',
            difficulty: 'Intermediate',
            cue: 'Face away from the stack and take a staggered stance.',
          },
          {
            name: 'Skullcrushers',
            equipment: 'EZ bar + bench',
            difficulty: 'Advanced',
            cue: 'Lower the bar to your hairline, elbows fixed and narrow.',
          },
        ],
      },
      {
        name: 'Dips (Triceps Version)',
        sets: '3 sets · 8–12 reps',
        description:
          'A compound bodyweight builder when performed upright with tucked elbows.',
        variations: [
          {
            name: 'Bench Dips',
            equipment: 'Two benches',
            difficulty: 'Beginner',
            cue: 'Keep your back close to the bench and shoulders down.',
          },
          {
            name: 'Upright Parallel Bar Dips',
            equipment: 'Dip station',
            difficulty: 'Advanced',
            cue: 'Stay vertical and keep elbows tracking straight back.',
          },
          {
            name: 'Close-Grip Bench Press',
            equipment: 'Barbell + bench',
            difficulty: 'Intermediate',
            cue: 'Hands just inside shoulder width, elbows tucked.',
          },
        ],
      },
    ],
  },

  forearms: {
    id: 'forearms',
    name: 'Forearms',
    tagline: 'Flexors, extensors & grip',
    color: '#26a69a',
    view: 'front',
    description:
      'The forearms power your grip and stabilize every pull and press you do. Direct work builds wrist strength, endurance, and lower-arm size.',
    exercises: [
      {
        name: 'Wrist Curl',
        sets: '3 sets · 12–20 reps',
        description:
          'Direct isolation for the forearm flexors — the meaty inside of the lower arm.',
        variations: [
          {
            name: 'Barbell Wrist Curl',
            equipment: 'Barbell + bench',
            difficulty: 'Beginner',
            cue: 'Rest forearms on the bench, let the bar roll to your fingertips.',
          },
          {
            name: 'Reverse Wrist Curl',
            equipment: 'Barbell / dumbbells',
            difficulty: 'Beginner',
            cue: 'Palms down trains the extensors — use half the weight.',
          },
          {
            name: 'Behind-the-Back Wrist Curl',
            equipment: 'Barbell',
            difficulty: 'Intermediate',
            cue: 'Stand tall and curl the bar behind your glutes.',
          },
        ],
      },
      {
        name: "Farmer's Carry",
        sets: '3 rounds · 30–60 m walks',
        description:
          'Heavy loaded carries build crushing grip strength and dense forearms.',
        variations: [
          {
            name: "Standard Farmer's Walk",
            equipment: 'Dumbbells / kettlebells / trap bar',
            difficulty: 'Beginner',
            cue: 'Stand tall, shoulders back, walk with short quick steps.',
          },
          {
            name: 'Suitcase Carry',
            equipment: 'Single dumbbell',
            difficulty: 'Intermediate',
            cue: 'One-sided load forces the obliques to stabilize too.',
          },
          {
            name: 'Towel-Grip Carry',
            equipment: 'Towels + kettlebells',
            difficulty: 'Advanced',
            cue: 'Gripping a towel dramatically increases grip demand.',
          },
        ],
      },
      {
        name: 'Plate Pinch',
        sets: '3 sets · 20–40 sec holds',
        description:
          'Pinching smooth plates together is a pure test of thumb and finger strength.',
        variations: [
          {
            name: 'Two-Plate Pinch',
            equipment: '2 weight plates',
            difficulty: 'Intermediate',
            cue: 'Smooth sides out, pinch and hold at your side.',
          },
          {
            name: 'Single-Plate Pinch',
            equipment: '1 weight plate',
            difficulty: 'Beginner',
            cue: 'Start with a 5–10 kg plate and build up.',
          },
          {
            name: 'Wrist Roller',
            equipment: 'Wrist roller + plate',
            difficulty: 'Intermediate',
            cue: 'Roll the weight up and down with straight arms, both directions.',
          },
        ],
      },
    ],
  },

  abs: {
    id: 'abs',
    name: 'Abs',
    tagline: 'Rectus abdominis',
    color: '#29b6f6',
    view: 'front',
    description:
      'The rectus abdominis flexes the spine — think curling the ribs toward the pelvis. Progressive overload applies here too: add load or leverage, not endless reps.',
    exercises: [
      {
        name: 'Crunch',
        sets: '3 sets · 12–20 reps',
        description:
          'A short-range spinal flexion that keeps tension squarely on the abs.',
        variations: [
          {
            name: 'Bodyweight Crunch',
            equipment: 'Mat',
            difficulty: 'Beginner',
            cue: 'Curl your ribs to your pelvis; lower back stays down.',
          },
          {
            name: 'Cable Crunch',
            equipment: 'Cable + rope',
            difficulty: 'Intermediate',
            cue: 'Kneel and crunch the rope down, rounding your spine.',
          },
          {
            name: 'Weighted Crunch',
            equipment: 'Plate / dumbbell',
            difficulty: 'Intermediate',
            cue: 'Hold the weight on your chest, not behind your neck.',
          },
        ],
      },
      {
        name: 'Hanging Leg Raise',
        sets: '3 sets · 8–15 reps',
        description:
          'A higher-tension movement that loads the lower fibers of the abs.',
        variations: [
          {
            name: 'Hanging Knee Raise',
            equipment: 'Pull-up bar',
            difficulty: 'Beginner',
            cue: 'Curl the pelvis up, don\'t just swing the knees.',
          },
          {
            name: 'Straight-Leg Raise',
            equipment: 'Pull-up bar',
            difficulty: 'Intermediate',
            cue: 'Raise legs to 90° without kipping.',
          },
          {
            name: 'Toes-to-Bar',
            equipment: 'Pull-up bar',
            difficulty: 'Advanced',
            cue: 'Compress hard and touch toes to the bar each rep.',
          },
        ],
      },
      {
        name: 'Plank',
        sets: '3 sets · 30–60 sec holds',
        description:
          'Anti-extension training that builds deep core stiffness for heavy lifts.',
        variations: [
          {
            name: 'Forearm Plank',
            equipment: 'Mat',
            difficulty: 'Beginner',
            cue: 'Ribs down, glutes squeezed, straight line head to heels.',
          },
          {
            name: 'Weighted Plank',
            equipment: 'Plate on back',
            difficulty: 'Intermediate',
            cue: 'Add load before adding time — quality over duration.',
          },
          {
            name: 'RKC Plank',
            equipment: 'Mat',
            difficulty: 'Advanced',
            cue: 'Actively pull elbows to toes and crush the floor — 10–20 sec max.',
          },
        ],
      },
    ],
  },

  obliques: {
    id: 'obliques',
    name: 'Obliques',
    tagline: 'Internal & external obliques',
    color: '#42a5f5',
    view: 'side',
    description:
      'The obliques rotate and side-bend the trunk and brace against twisting forces. Train rotation, anti-rotation, and lateral flexion for a complete, athletic core.',
    exercises: [
      {
        name: 'Russian Twist',
        sets: '3 sets · 16–24 total reps',
        description:
          'A rotational movement that trains the obliques through trunk rotation.',
        variations: [
          {
            name: 'Bodyweight Russian Twist',
            equipment: 'Mat',
            difficulty: 'Beginner',
            cue: 'Rotate the ribs, not just the arms — chest leads the twist.',
          },
          {
            name: 'Medicine Ball Twist',
            equipment: 'Med ball',
            difficulty: 'Intermediate',
            cue: 'Tap the ball lightly on the floor beside each hip.',
          },
          {
            name: 'Feet-Elevated Twist',
            equipment: 'Plate / med ball',
            difficulty: 'Advanced',
            cue: 'Lift the feet to remove leg drive and isolate rotation.',
          },
        ],
      },
      {
        name: 'Side Plank',
        sets: '3 sets · 20–45 sec per side',
        description:
          'Anti-lateral-flexion hold that strengthens the obliques and quadratus lumborum.',
        variations: [
          {
            name: 'Forearm Side Plank',
            equipment: 'Mat',
            difficulty: 'Beginner',
            cue: 'Stack hips and shoulders; drive the bottom hip high.',
          },
          {
            name: 'Side Plank with Rotation',
            equipment: 'Mat',
            difficulty: 'Intermediate',
            cue: 'Thread the top arm under your body, then open back up.',
          },
          {
            name: 'Weighted Side Plank',
            equipment: 'Dumbbell / plate',
            difficulty: 'Advanced',
            cue: 'Rest a light plate on the top hip for added load.',
          },
        ],
      },
      {
        name: 'Cable Woodchop',
        sets: '3 sets · 10–12 per side',
        description:
          'A standing diagonal chop pattern with direct carryover to sport rotation.',
        variations: [
          {
            name: 'High-to-Low Chop',
            equipment: 'Cable station',
            difficulty: 'Beginner',
            cue: 'Rotate through the hips and keep arms long.',
          },
          {
            name: 'Low-to-High Lift',
            equipment: 'Cable station',
            difficulty: 'Beginner',
            cue: 'Drive from the back hip and finish tall.',
          },
          {
            name: 'Band Pallof Press',
            equipment: 'Resistance band',
            difficulty: 'Intermediate',
            cue: 'Press out and resist the band pulling you into rotation.',
          },
        ],
      },
    ],
  },

  traps: {
    id: 'traps',
    name: 'Traps',
    tagline: 'Trapezius — upper, mid & lower',
    color: '#7e57c2',
    view: 'back',
    description:
      'The trapezius runs from your skull to mid-back, shrugging, retracting, and depressing the shoulder blades. Heavy holds and pulls build the upper traps; rows and face pulls hit the mid and lower fibers.',
    exercises: [
      {
        name: 'Shrug',
        sets: '3–4 sets · 10–15 reps',
        description:
          'The most direct way to overload the upper traps with heavy weight.',
        variations: [
          {
            name: 'Barbell Shrug',
            equipment: 'Barbell',
            difficulty: 'Beginner',
            cue: 'Shrug straight up to your ears — no rolling.',
          },
          {
            name: 'Dumbbell Shrug',
            equipment: 'Dumbbells',
            difficulty: 'Beginner',
            cue: 'Neutral grip at the sides allows a bigger range of motion.',
          },
          {
            name: 'Behind-the-Back Shrug',
            equipment: 'Barbell / smith machine',
            difficulty: 'Intermediate',
            cue: 'Bar behind the glutes shifts emphasis and keeps you honest.',
          },
        ],
      },
      {
        name: 'Upright Row',
        sets: '3 sets · 8–12 reps',
        description:
          'A vertical pull that hits the traps and side delts together.',
        variations: [
          {
            name: 'EZ-Bar Upright Row',
            equipment: 'EZ bar',
            difficulty: 'Intermediate',
            cue: 'Pull to mid-chest, elbows leading above the bar.',
          },
          {
            name: 'Dumbbell Upright Row',
            equipment: 'Dumbbells',
            difficulty: 'Intermediate',
            cue: 'Independent dumbbells are kinder to the shoulders.',
          },
          {
            name: 'Cable Upright Row',
            equipment: 'Cable + rope / bar',
            difficulty: 'Beginner',
            cue: 'Constant tension — pause just below chin height.',
          },
        ],
      },
      {
        name: 'Face Pull',
        sets: '3 sets · 12–20 reps',
        description:
          'Mid and lower traps plus rear delts — the ultimate posture exercise.',
        variations: [
          {
            name: 'Rope Face Pull',
            equipment: 'Cable + rope',
            difficulty: 'Beginner',
            cue: 'Externally rotate at the end — knuckles to the ceiling.',
          },
          {
            name: 'Band Pull-Apart',
            equipment: 'Resistance band',
            difficulty: 'Beginner',
            cue: 'Pull the band apart at chest height, squeeze the blades.',
          },
          {
            name: 'Overhead Shrug (Y-raise)',
            equipment: 'Light dumbbells',
            difficulty: 'Advanced',
            cue: 'On an incline bench, raise arms in a Y and shrug at the top.',
          },
        ],
      },
    ],
  },

  lats: {
    id: 'lats',
    name: 'Back',
    tagline: 'Lats, rhomboids & spinal erectors',
    color: '#ab47bc',
    view: 'back',
    description:
      'The lats pull your arms down and back, building the V-taper, while the erectors along the spine keep you braced under load. Combine vertical pulls, rows, and hip hinges.',
    exercises: [
      {
        name: 'Pull-Up',
        sets: '3–4 sets · 5–12 reps',
        description:
          'The king of vertical pulls — nothing builds lat width like bodyweight pulls.',
        variations: [
          {
            name: 'Chin-Up (underhand)',
            equipment: 'Pull-up bar',
            difficulty: 'Intermediate',
            cue: 'Underhand grip recruits the biceps more — usually stronger.',
          },
          {
            name: 'Wide-Grip Pull-Up',
            equipment: 'Pull-up bar',
            difficulty: 'Advanced',
            cue: 'Pull your chest to the bar, driving elbows down to your hips.',
          },
          {
            name: 'Assisted / Negative Pull-Up',
            equipment: 'Band / box',
            difficulty: 'Beginner',
            cue: 'Lower for 4–5 seconds to build toward your first rep.',
          },
        ],
      },
      {
        name: 'Row',
        sets: '3–4 sets · 8–12 reps',
        description:
          'Horizontal pulling builds back thickness — lats, rhomboids, and mid-traps.',
        variations: [
          {
            name: 'Barbell Bent-Over Row',
            equipment: 'Barbell',
            difficulty: 'Intermediate',
            cue: 'Hinge to ~45°, pull the bar to your lower ribs.',
          },
          {
            name: 'Single-Arm Dumbbell Row',
            equipment: 'Dumbbell + bench',
            difficulty: 'Beginner',
            cue: 'Row the dumbbell to your hip, not your shoulder.',
          },
          {
            name: 'Seated Cable Row',
            equipment: 'Cable + V-handle',
            difficulty: 'Beginner',
            cue: 'Squeeze your shoulder blades at the end of every rep.',
          },
        ],
      },
      {
        name: 'Lat Pulldown',
        sets: '3 sets · 10–12 reps',
        description:
          'A scalable vertical pull, perfect for learning lat engagement or adding volume.',
        variations: [
          {
            name: 'Wide-Grip Pulldown',
            equipment: 'Pulldown machine',
            difficulty: 'Beginner',
            cue: 'Pull to the upper chest, lean back only slightly.',
          },
          {
            name: 'Close Neutral-Grip Pulldown',
            equipment: 'V-handle attachment',
            difficulty: 'Beginner',
            cue: 'Neutral grip gives the lats a deeper stretch at the top.',
          },
          {
            name: 'Straight-Arm Pulldown',
            equipment: 'Cable + bar / rope',
            difficulty: 'Intermediate',
            cue: 'Arms nearly straight — sweep the bar to your thighs.',
          },
        ],
      },
    ],
  },

  glutes: {
    id: 'glutes',
    name: 'Glutes',
    tagline: 'Gluteus maximus, medius & minimus',
    color: '#ec407a',
    view: 'back',
    description:
      'The glutes are the largest muscle in the body, driving hip extension for squats, hinges, and sprints. Load hip thrusts heavy and add single-leg work for the medius.',
    exercises: [
      {
        name: 'Hip Thrust',
        sets: '3–4 sets · 8–12 reps',
        description:
          'The highest glute-activation exercise known — progressive overload friendly.',
        variations: [
          {
            name: 'Barbell Hip Thrust',
            equipment: 'Barbell + bench',
            difficulty: 'Intermediate',
            cue: 'Chin tucked, ribs down, full hip extension with a 1-sec squeeze.',
          },
          {
            name: 'Single-Leg Hip Thrust',
            equipment: 'Bodyweight / dumbbell',
            difficulty: 'Intermediate',
            cue: 'Keep the pelvis level — no twisting to one side.',
          },
          {
            name: 'Glute Bridge',
            equipment: 'Mat / plate',
            difficulty: 'Beginner',
            cue: 'Same pattern on the floor — great starting point.',
          },
        ],
      },
      {
        name: 'Squat (Glute Focus)',
        sets: '3–4 sets · 6–10 reps',
        description:
          'Deep squats load the glutes in a stretched position for serious growth.',
        variations: [
          {
            name: 'Low-Bar Back Squat',
            equipment: 'Barbell + rack',
            difficulty: 'Intermediate',
            cue: 'Lower bar position + forward lean shifts work to glutes and hips.',
          },
          {
            name: 'Sumo Squat',
            equipment: 'Barbell / kettlebell',
            difficulty: 'Intermediate',
            cue: 'Wide stance, toes out — sit between your heels.',
          },
          {
            name: 'Bulgarian Split Squat',
            equipment: 'Dumbbells + bench',
            difficulty: 'Advanced',
            cue: 'Lean the torso slightly forward to bias the glute.',
          },
        ],
      },
      {
        name: 'Kickback / Abduction',
        sets: '3 sets · 12–15 per side',
        description:
          'Accessory work for the glute max (kickbacks) and medius (abduction).',
        variations: [
          {
            name: 'Cable Kickback',
            equipment: 'Cable + ankle strap',
            difficulty: 'Beginner',
            cue: 'Kick straight back without arching the lower back.',
          },
          {
            name: 'Hip Abduction Machine',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Lean forward slightly and control the return.',
          },
          {
            name: 'Banded Lateral Walk',
            equipment: 'Mini band',
            difficulty: 'Beginner',
            cue: 'Half-squat position, step wide without letting knees cave.',
          },
        ],
      },
    ],
  },

  quads: {
    id: 'quads',
    name: 'Quads',
    tagline: 'Quadriceps — 4 heads',
    color: '#ff7043',
    view: 'front',
    description:
      'The quadriceps extend the knee and are the engine of squats, lunges, and jumps. Deep knee flexion under load is the key stimulus — squat deep and lunge long.',
    exercises: [
      {
        name: 'Back Squat',
        sets: '3–5 sets · 5–8 reps',
        description:
          'The foundational lower-body lift; high-bar and front variations bias the quads.',
        variations: [
          {
            name: 'High-Bar Back Squat',
            equipment: 'Barbell + rack',
            difficulty: 'Intermediate',
            cue: 'Stay upright, break at the knees and hips together.',
          },
          {
            name: 'Front Squat',
            equipment: 'Barbell + rack',
            difficulty: 'Advanced',
            cue: 'Elbows high — the upright torso torches the quads.',
          },
          {
            name: 'Goblet Squat',
            equipment: 'Dumbbell / kettlebell',
            difficulty: 'Beginner',
            cue: 'Hold the weight at your chest and squat between your heels.',
          },
        ],
      },
      {
        name: 'Leg Press',
        sets: '3–4 sets · 10–12 reps',
        description:
          'Heavy quad loading without the balance or spinal demands of a barbell squat.',
        variations: [
          {
            name: 'Standard Leg Press',
            equipment: 'Leg press machine',
            difficulty: 'Beginner',
            cue: 'Feet mid-platform, lower until knees reach ~90°.',
          },
          {
            name: 'Low-Foot Leg Press',
            equipment: 'Leg press machine',
            difficulty: 'Intermediate',
            cue: 'Feet low on the platform maximizes quad stretch.',
          },
          {
            name: 'Single-Leg Press',
            equipment: 'Leg press machine',
            difficulty: 'Intermediate',
            cue: 'Half the load, strict control — fixes imbalances.',
          },
        ],
      },
      {
        name: 'Lunge / Leg Extension',
        sets: '3 sets · 10–15 reps',
        description:
          'Unilateral lunges for athletic legs; extensions to isolate and finish the quads.',
        variations: [
          {
            name: 'Walking Lunge',
            equipment: 'Dumbbells',
            difficulty: 'Intermediate',
            cue: 'Long stride, torso tall, knee tracks over the toes.',
          },
          {
            name: 'Reverse Lunge',
            equipment: 'Dumbbells / barbell',
            difficulty: 'Beginner',
            cue: 'Stepping back is easier on the knees — same stimulus.',
          },
          {
            name: 'Leg Extension',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Pause at full lockout and squeeze the quads hard.',
          },
        ],
      },
    ],
  },

  adductors: {
    id: 'adductors',
    name: 'Adductors',
    tagline: 'Inner thigh — adductor group',
    color: '#4dd0e1',
    view: 'front',
    description:
      'The adductors pull your legs toward the midline and stabilize the pelvis in every squat, lunge, and change of direction. Strong inner thighs protect the groin and boost squat strength out of the hole.',
    exercises: [
      {
        name: 'Hip Adduction',
        sets: '3 sets · 10–15 reps',
        description:
          'Direct isolation for the inner thigh — the most targeted way to load the adductors.',
        variations: [
          {
            name: 'Seated Adduction Machine',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Squeeze the pads together slowly; control the release.',
          },
          {
            name: 'Standing Cable Adduction',
            equipment: 'Cable + ankle strap',
            difficulty: 'Intermediate',
            cue: 'Sweep the working leg across your body without twisting.',
          },
          {
            name: 'Band Adduction',
            equipment: 'Resistance band',
            difficulty: 'Beginner',
            cue: 'Anchor the band low and pull the leg in from a wide stance.',
          },
        ],
      },
      {
        name: 'Cossack Squat',
        sets: '3 sets · 6–10 per side',
        description:
          'A deep lateral squat that loads the adductors in a long, stretched position.',
        variations: [
          {
            name: 'Bodyweight Cossack Squat',
            equipment: 'Bodyweight',
            difficulty: 'Intermediate',
            cue: 'Sit deep into one hip, keep the straight leg\'s toes up.',
          },
          {
            name: 'Goblet Cossack Squat',
            equipment: 'Kettlebell / dumbbell',
            difficulty: 'Advanced',
            cue: 'Hold the weight at your chest for counterbalance and load.',
          },
          {
            name: 'Supported Cossack Squat',
            equipment: 'Rack / TRX',
            difficulty: 'Beginner',
            cue: 'Hold a support to groove the pattern with control.',
          },
        ],
      },
      {
        name: 'Copenhagen Plank',
        sets: '3 sets · 15–30 sec per side',
        description:
          'The gold-standard adductor isometric for groin resilience and hip stability.',
        variations: [
          {
            name: 'Short-Lever Copenhagen',
            equipment: 'Bench',
            difficulty: 'Beginner',
            cue: 'Bottom knee on the bench, lift hips into a straight line.',
          },
          {
            name: 'Full Copenhagen Plank',
            equipment: 'Bench',
            difficulty: 'Advanced',
            cue: 'Top ankle on the bench, bottom leg hovering — hips high.',
          },
          {
            name: 'Lateral Lunge',
            equipment: 'Dumbbell',
            difficulty: 'Intermediate',
            cue: 'Step wide, sit back into the hip, drive back to center.',
          },
        ],
      },
    ],
  },

  hamstrings: {
    id: 'hamstrings',
    name: 'Hamstrings',
    tagline: 'Biceps femoris, semis',
    color: '#d4e157',
    view: 'back',
    description:
      'The hamstrings cross the hip and knee, so train both functions: hip hinges (deadlift patterns) and knee flexion (curls). Strong hamstrings protect the knees and power sprints.',
    exercises: [
      {
        name: 'Romanian Deadlift',
        sets: '3–4 sets · 6–10 reps',
        description:
          'The premier hamstring builder — a loaded stretch under a hip-hinge pattern.',
        variations: [
          {
            name: 'Barbell RDL',
            equipment: 'Barbell',
            difficulty: 'Intermediate',
            cue: 'Push hips back, soft knees, lower to mid-shin.',
          },
          {
            name: 'Dumbbell RDL',
            equipment: 'Dumbbells',
            difficulty: 'Beginner',
            cue: 'Dumbbells track along the thighs — easier to groove.',
          },
          {
            name: 'Single-Leg RDL',
            equipment: 'Dumbbell / kettlebell',
            difficulty: 'Advanced',
            cue: 'Reach the free leg back and keep hips square.',
          },
        ],
      },
      {
        name: 'Leg Curl',
        sets: '3 sets · 10–15 reps',
        description:
          'Direct knee-flexion work the big lifts miss — essential for complete hamstrings.',
        variations: [
          {
            name: 'Lying Leg Curl',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Hips pinned down — no lifting the pelvis to cheat.',
          },
          {
            name: 'Seated Leg Curl',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'The hip-flexed position stretches the hamstrings more.',
          },
          {
            name: 'Stability Ball Curl',
            equipment: 'Swiss ball',
            difficulty: 'Intermediate',
            cue: 'Bridge up and roll the ball in without dropping the hips.',
          },
        ],
      },
      {
        name: 'Nordic Curl / Good Morning',
        sets: '3 sets · 4–8 reps',
        description:
          'Advanced eccentric and hinge work for bulletproof posterior chains.',
        variations: [
          {
            name: 'Assisted Nordic Curl',
            equipment: 'Anchored feet + band / post',
            difficulty: 'Advanced',
            cue: 'Lower as slowly as possible, catch yourself, push back up.',
          },
          {
            name: 'Good Morning',
            equipment: 'Barbell',
            difficulty: 'Advanced',
            cue: 'Light bar on the back, hinge with a braced neutral spine.',
          },
          {
            name: 'Glute-Ham Raise',
            equipment: 'GHD machine',
            difficulty: 'Advanced',
            cue: 'Keep the body in one line; curl with the hamstrings.',
          },
        ],
      },
    ],
  },

  calves: {
    id: 'calves',
    name: 'Calves',
    tagline: 'Gastrocnemius & soleus',
    color: '#8d6e63',
    view: 'back',
    description:
      'The calves point the foot (plantarflexion). Straight-knee raises hit the gastrocnemius; bent-knee raises target the deeper soleus. Full range and pauses beat heavy partials.',
    exercises: [
      {
        name: 'Standing Calf Raise',
        sets: '4 sets · 10–15 reps',
        description:
          'The bread-and-butter calf move — straight knees emphasize the gastrocnemius.',
        variations: [
          {
            name: 'Standing Calf Machine',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Full stretch at the bottom, 1-sec pause at the top.',
          },
          {
            name: 'Smith Machine Calf Raise',
            equipment: 'Smith machine + step',
            difficulty: 'Beginner',
            cue: 'Balls of the feet on the step edge for maximum range.',
          },
          {
            name: 'Single-Leg Dumbbell Raise',
            equipment: 'Dumbbell + step',
            difficulty: 'Intermediate',
            cue: 'Hold a rack for balance; own each rep — no bouncing.',
          },
        ],
      },
      {
        name: 'Seated Calf Raise',
        sets: '4 sets · 12–20 reps',
        description:
          'Bent knees take the gastroc out and hammer the soleus — the calf\'s width.',
        variations: [
          {
            name: 'Seated Calf Machine',
            equipment: 'Machine',
            difficulty: 'Beginner',
            cue: 'Slow negatives — the soleus responds to time under tension.',
          },
          {
            name: 'Dumbbell-on-Knee Raise',
            equipment: 'Dumbbell + step',
            difficulty: 'Beginner',
            cue: 'DIY version: sit tall, dumbbell on the knee, full range.',
          },
          {
            name: 'Donkey Calf Raise',
            equipment: 'Machine / partner',
            difficulty: 'Intermediate',
            cue: 'Hinge at the hips for a brutal loaded stretch.',
          },
        ],
      },
      {
        name: 'Plyometric / Carry',
        sets: '3 sets · 30–60 sec',
        description:
          'Athletic options that train the calves the way they work in sport.',
        variations: [
          {
            name: 'Jump Rope',
            equipment: 'Rope',
            difficulty: 'Beginner',
            cue: 'Small bounces on the balls of the feet, wrists do the work.',
          },
          {
            name: 'Pogo Hops',
            equipment: 'Bodyweight',
            difficulty: 'Intermediate',
            cue: 'Stiff ankles, minimal knee bend, spring off the floor.',
          },
          {
            name: 'Tiptoe Farmer\'s Walk',
            equipment: 'Dumbbells',
            difficulty: 'Intermediate',
            cue: 'Heavy bells, walk on the balls of your feet.',
          },
        ],
      },
    ],
  },
}

export const MUSCLE_LIST: MuscleInfo[] = [
  MUSCLES.chest,
  MUSCLES.shoulders,
  MUSCLES.biceps,
  MUSCLES.triceps,
  MUSCLES.forearms,
  MUSCLES.abs,
  MUSCLES.obliques,
  MUSCLES.traps,
  MUSCLES.lats,
  MUSCLES.glutes,
  MUSCLES.quads,
  MUSCLES.adductors,
  MUSCLES.hamstrings,
  MUSCLES.calves,
]
