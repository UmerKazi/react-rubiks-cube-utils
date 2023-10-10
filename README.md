# React Rubiks Cube Utilities

A comprehensive utility package for Rubik's Cube enthusiasts and developers. This package provides tools to generate scrambles for all WCA standard cubes, create visually appealing displays for cubes given any scramble or cube state, and a solver for any given scrambled cube. Built with TypeScript and tested with Jest.

## Installation

Run the following command in your terminal to install the package to your application:

`npm install react-rubiks-cube-utils` or `yarn add react-rubiks-cube-utils`

## Usage

**Note:** All functions pertaining to a cube are under the assumption that it is oriented in standard position (white up and green facing towards the user) and thus follow standard face names and movement notation.

To get a scramble for a given cube type, use `generateScramble`

```
import { generateScramble } from 'react-rubiks-cube-utils';
const scramble: string = generateScramble({ type: '3x3', turns: 20 });
```

This will return a string containing the number of moves defined in the turns prop for the cube in the type prop. Currently, the supported cube types are...

- 2x2
- 3x3
- 4x4
- 5x5
- 6x6
- 7x7
- Square-1
- Pyraminx
- Clock
- Skewb
- Megaminx
- 3x3 Mirror

To apply a scramble to a Cube object, use `applyScramble`

```
import { applyScramble, 3x3Cube } from  'react-rubiks-cube-utils';
const scramble: string = "B' U' F2 B2 U D2 R' L U' R' U2 L D2 F' B D' B2 R L' U'";
const scrambledCube: 3x3Cube = applyScramble({type: '3x3', scramble});
console.log(scrambledCube);
```

This array reflects the state of all 6 faces of the cube after the scramble has been applied to it

To render the faces of a Cube object in your front-end, use `DisplayCube`

```
import { DisplayCube, generateScramble, applyScramble, 2x2Cube } from 'react-rubiks-cube-utils';

export default function RubiksCubeDisplay() {
	const scramble: string = generateScramble({ type: '3x3', turns: 20 });
	const myCube: 3x3Cube = applyScramble({ type: '3x3', scramble});
	return (
		<main>
			<DisplayCube cube={myCube} type="3x3" />
		</main>
	);
}

```

This will return a component that displays the faces of a given cube. At the moment, `DisplayCube` only supports 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, and 3x3 Mirror cube types.

To get a Cube object in solved state, use `solvedCube`

```
import { solvedCube } from 'react-rubiks-cube-utils';
console.log(solvedCube({ type: '3x3' }));
```

This will return an array that reflectes the state of a base solved cube

To get a solution for a scrambled cube, use `solveCube`

```
import { solveCube, 3x3Cube } from 'react-rubiks-cube-utils';
const myCube: 3x3Cube = {
	U:[
		["O","O","G"],
		["R","W","G"],
		["G","Y","R"]
	],
	D:[
		["W","Y","B"],
		["R","Y","W"],
		["O","O","W"]
	],
	L:[
		["G","B","W"],
		["R","O","Y"],
		["W","W","R"]
	],
	R:[
		["B","W","Y"],
		["G","R","B"],
		["Y","B","B"]
	],
	F:[
		["O","B","Y"],
		["O","G","R"],
		["G","G","O"]
	],
	B:[
		["R","W","Y"],
		["O","B","Y"],
		["R","G","B"]
	]
}
const solution: string = solveCube({ type: "3x3", myCube });
console.log(solution);
```

This will return a string with the steps required to solve the given cube in the given state

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/UmerKazi/react-rubiks-cube-utils/issues) on GitHub.
