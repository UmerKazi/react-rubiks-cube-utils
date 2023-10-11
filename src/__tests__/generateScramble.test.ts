import { generateScramble } from '../generateScramble';

describe('generateScramble', () => {
  const validCubeTypes = [
    '2x2',
    '3x3',
    '4x4',
    '5x5',
    '6x6',
    '7x7',
    'square-1',
    'pyraminx',
    'clock',
    'skewb',
    'megaminx',
  ];

  validCubeTypes.forEach((type) => {
    it(`should generate a scramble for ${type}`, () => {
      const scramble = generateScramble({ type });
      expect(typeof scramble).toBe('string');
      expect(scramble.length).toBeGreaterThan(0);
    });
  });

  it('should throw an error for an invalid cube type', () => {
    expect(() => generateScramble({ type: 'invalidType' })).toThrow(
      'Invalid cube type, must be one of 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, square-1, pyraminx, clock, skewb, megaminx',
    );
  });
});
