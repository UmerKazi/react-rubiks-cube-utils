import { Scrambow } from 'scrambow';

interface GenerateScrambleProps {
  type: string;
}
function generateScramble({ type }: GenerateScrambleProps) {
  const validTypes = ['2x2', '3x3', '4x4', '5x5', '6x6', '7x7', 'square-1', 'pyraminx', 'clock', 'skewb', 'megaminx'];
  const typeMapping: { [key: string]: string } = {
    '2x2': '222',
    '3x3': '333',
    '4x4': '444',
    '5x5': '555',
    '6x6': '666',
    '7x7': '777',
    'square-1': 'square1',
    pyraminx: 'pyraminx',
    clock: 'clock',
    skewb: 'skewb',
    megaminx: 'megaminx',
  };

  if (validTypes.includes(type)) {
    const scrambowType: string = typeMapping[type];
    const scrambo = new Scrambow(scrambowType);
    const scrambleOb = scrambo.get();
    let scramble = scrambleOb[0].scramble_string;
    scramble = scramble.replace(/\s+/g, ' ').trim();
    return scramble;
  } else {
    throw new Error('Invalid cube type, must be one of ' + validTypes.join(', '));
  }
}

export { generateScramble };
