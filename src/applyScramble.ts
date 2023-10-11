import { applyScrambleHelper } from './applyScrambleHelper.js';

type Color = 'W' | 'Y' | 'G' | 'B' | 'R' | 'O';
type Face = Color[][];
type Cube = {
  U: Face;
  D: Face;
  L: Face;
  R: Face;
  F: Face;
  B: Face;
};

interface ApplyScrambleProps {
  type: string;
  scramble: string;
}

function applyScramble({ type, scramble }: ApplyScrambleProps) {
  return applyScrambleHelper({ type, scramble }) as Cube;
}

export type { Cube, Color, Face };
export { applyScramble };
