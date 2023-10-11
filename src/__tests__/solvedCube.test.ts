import { solvedCube, SolvedCubeType } from '../solvedCube';

describe('solvedCube', () => {
  const testCases: { type: SolvedCubeType; size: number }[] = [
    { type: '2x2', size: 2 },
    { type: '3x3', size: 3 },
    { type: '4x4', size: 4 },
    { type: '5x5', size: 5 },
    { type: '6x6', size: 6 },
    { type: '7x7', size: 7 },
  ];

  testCases.forEach((testCase) => {
    it(`should generate a solved ${testCase.type} cube`, () => {
      const cube = solvedCube({ type: testCase.type });
      expect(cube.U.length).toBe(testCase.size);
      expect(cube.U[0]).toEqual(new Array(testCase.size).fill('W'));
    });
  });

  it('should throw an error for unsupported cube type', () => {
    expect(() => solvedCube({ type: '8x8' } as any)).toThrow('Unsupported cube type: 8x8'); // Cast to 'any' to bypass TypeScript type checking
  });
});
