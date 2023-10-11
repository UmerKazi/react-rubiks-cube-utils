import { Cube } from './applyScramble';

type CubeFace = 'U' | 'D' | 'L' | 'R' | 'F' | 'B';
type SolvedCubeType = '2x2' | '3x3' | '4x4' | '5x5' | '6x6' | '7x7';

interface SolvedCubeProps {
  type: SolvedCubeType;
}

function generateSolvedCube(n: number) {
  const colors = {
    U: 'W',
    D: 'Y',
    L: 'O',
    R: 'R',
    F: 'G',
    B: 'B',
  };

  const cube: { [key in CubeFace]: string[][] } = {
    U: [],
    D: [],
    L: [],
    R: [],
    F: [],
    B: [],
  };

  for (const face in cube) {
    if (cube.hasOwnProperty(face)) {
      for (let i = 0; i < n; i++) {
        cube[face as CubeFace].push(Array(n).fill(colors[face as CubeFace]));
      }
    }
  }

  return cube;
}

const cubeTypeToSize: { [key in SolvedCubeType]?: number } = {
  '2x2': 2,
  '3x3': 3,
  '4x4': 4,
  '5x5': 5,
  '6x6': 6,
  '7x7': 7,
};

function solvedCube({ type }: SolvedCubeProps) {
  const size = cubeTypeToSize[type];

  if (!size) {
    throw new Error(`Unsupported cube type: ${type}`);
  }
  return generateSolvedCube(size) as Cube;
}

export type { SolvedCubeType };
export { solvedCube };
