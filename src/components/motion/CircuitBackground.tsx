'use client';
import { motion, useReducedMotion } from 'framer-motion';

type Node = { x: number; y: number; r: number };
type Edge = [number, number];

const nodes: Node[] = [
  { x: 120, y: 90, r: 3 },
  { x: 300, y: 60, r: 2.5 },
  { x: 480, y: 130, r: 3.5 },
  { x: 660, y: 70, r: 2.5 },
  { x: 840, y: 110, r: 3 },
  { x: 1000, y: 70, r: 2.5 },
  { x: 200, y: 230, r: 3 },
  { x: 420, y: 260, r: 4 },
  { x: 620, y: 220, r: 3 },
  { x: 820, y: 280, r: 3.5 },
  { x: 980, y: 240, r: 2.5 },
  { x: 120, y: 400, r: 3 },
  { x: 320, y: 420, r: 3 },
  { x: 540, y: 400, r: 4 },
  { x: 740, y: 440, r: 3 },
  { x: 940, y: 400, r: 3 },
  { x: 1080, y: 430, r: 2.5 },
  { x: 240, y: 560, r: 3 },
  { x: 460, y: 580, r: 3.5 },
  { x: 680, y: 560, r: 3 },
  { x: 900, y: 590, r: 3 },
];

const edges: Edge[] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [0, 6], [1, 6], [2, 7], [3, 8], [4, 8], [5, 9], [9, 10],
  [6, 11], [7, 12], [8, 13], [9, 14], [10, 15], [5, 15],
  [11, 12], [12, 13], [13, 14], [14, 15], [15, 16],
  [11, 17], [12, 18], [13, 18], [14, 19], [15, 20], [16, 20],
  [17, 18], [18, 19], [19, 20],
  [6, 7], [7, 8], [8, 9],
];

const W = 1200;
const H = 640;

export function CircuitBackground ({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={ className } aria-hidden="true">
      <svg
        viewBox={ `0 0 ${W} ${H}` }
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>

        { edges.map(([a, b], i) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          const midX = (n1.x + n2.x) / 2;
          return (
            <g key={ i }>
              <path
                d={ `M ${n1.x} ${n1.y} L ${midX} ${n1.y} L ${midX} ${n2.y} L ${n2.x} ${n2.y}` }
                fill="none"
                stroke="url(#edge-grad)"
                strokeWidth={ 1 }
                strokeOpacity={ 0.35 }
              />
              { !reduce && i % 3 === 0 && (
                <path
                  d={ `M ${n1.x} ${n1.y} L ${midX} ${n1.y} L ${midX} ${n2.y} L ${n2.x} ${n2.y}` }
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth={ 1.5 }
                  strokeOpacity={ 0.7 }
                  strokeDasharray="4 36"
                  className="animate-dash-flow"
                />
              ) }
            </g>
          );
        }) }

        { nodes.map((n, i) => (
          <g key={ `n-${i}` }>
            <circle cx={ n.x } cy={ n.y } r={ n.r * 3 } fill="url(#node-glow)" opacity={ 0.5 } />
            <motion.circle
              cx={ n.x }
              cy={ n.y }
              r={ n.r }
              fill="hsl(var(--accent))"
              initial={ { opacity: 0.5 } }
              animate={ reduce ? { opacity: 0.7 } : { opacity: [0.4, 1, 0.4] } }
              transition={ {
                duration: 3.5,
                repeat: Infinity,
                delay: (i % 7) * 0.4,
                ease: 'easeInOut',
              } }
            />
          </g>
        )) }
      </svg>
    </div>
  );
}