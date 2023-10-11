import { applyScramble, Cube } from '../index';

const resultingCube: Cube = {
  U: [
    ['O', 'O', 'G'],
    ['R', 'W', 'G'],
    ['G', 'Y', 'R'],
  ],
  D: [
    ['W', 'Y', 'B'],
    ['R', 'Y', 'W'],
    ['O', 'O', 'W'],
  ],
  L: [
    ['G', 'B', 'W'],
    ['R', 'O', 'Y'],
    ['W', 'W', 'R'],
  ],
  R: [
    ['B', 'W', 'Y'],
    ['G', 'R', 'B'],
    ['Y', 'B', 'B'],
  ],
  F: [
    ['O', 'B', 'Y'],
    ['O', 'G', 'R'],
    ['G', 'G', 'O'],
  ],
  B: [
    ['R', 'W', 'Y'],
    ['O', 'B', 'Y'],
    ['R', 'G', 'B'],
  ],
};

test('Apply Scramble', () => {
  expect(
    applyScramble({ scramble: "B' U' F2 B2 U D2 R' L U' R' U2 L D2 F' B D' B2 R L' U'", type: '3x3' }),
  ).toStrictEqual(resultingCube);
});
