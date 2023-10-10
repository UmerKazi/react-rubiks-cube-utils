// =======================
// Type Declerations
// =======================

type Color = "W" | "Y" | "G" | "B" | "R" | "O";
type Face = Color[][];
type Cube = {
  U: Face;
  D: Face;
  L: Face;
  R: Face;
  F: Face;
  B: Face;
};

// =======================
// Base Cube Array
// =======================

const solvedCube: Cube = {
  U: [
    ["W", "W", "W"],
    ["W", "W", "W"],
    ["W", "W", "W"],
  ],
  D: [
    ["Y", "Y", "Y"],
    ["Y", "Y", "Y"],
    ["Y", "Y", "Y"],
  ],
  L: [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ],
  R: [
    ["R", "R", "R"],
    ["R", "R", "R"],
    ["R", "R", "R"],
  ],
  F: [
    ["G", "G", "G"],
    ["G", "G", "G"],
    ["G", "G", "G"],
  ],
  B: [
    ["B", "B", "B"],
    ["B", "B", "B"],
    ["B", "B", "B"],
  ],
};

// =======================
// Cube Colors
// =======================

const colorMap = {
  W: "white",
  Y: "yellow",
  G: "green",
  B: "blue",
  R: "red",
  O: "orange",
};

// =======================
// Cube Moves Functions
// =======================

function rotate90(face: Face) {
  const N = face.length;
  const tempFace: Color[][] = Array(N)
    .fill([])
    .map(() => Array(N).fill("W"));
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      tempFace[j][N - 1 - i] = face[i][j];
    }
  }
  return tempFace;
}

function rotateU(cube: Cube) {
  const tempCube: Cube = JSON.parse(JSON.stringify(cube));
  for (let j = 0; j < 3; j += 1) {
    tempCube.L[0][j] = cube.F[0][j];
    tempCube.F[0][j] = cube.R[0][j];
    tempCube.R[0][j] = cube.B[0][j];
    tempCube.B[0][j] = cube.L[0][j];
  }
  tempCube.U = rotate90(tempCube.U);
  return tempCube;
}

function rotateD(cube: Cube) {
  const tempCube: Cube = JSON.parse(JSON.stringify(cube));
  for (let j = 0; j < 3; j += 1) {
    tempCube.F[2][j] = cube.L[2][j];
    tempCube.R[2][j] = cube.F[2][j];
    tempCube.B[2][j] = cube.R[2][j];
    tempCube.L[2][j] = cube.B[2][j];
  }
  tempCube.D = rotate90(tempCube.D);
  return tempCube;
}

function rotateR(cube: Cube) {
  const tempCube: Cube = JSON.parse(JSON.stringify(cube));
  for (let j = 0; j < 3; j += 1) {
    tempCube.U[j][2] = cube.F[j][2];
    tempCube.F[j][2] = cube.D[j][2];
    tempCube.B[j][0] = cube.U[j][2];
  }
  tempCube.D[0][2] = cube.B[2][0];
  tempCube.D[1][2] = cube.B[1][0];
  tempCube.D[2][2] = cube.B[0][0];
  tempCube.B[0][0] = cube.U[2][2];
  tempCube.B[1][0] = cube.U[1][2];
  tempCube.B[2][0] = cube.U[0][2];
  tempCube.R = rotate90(tempCube.R);
  return tempCube;
}

function rotateL(cube: Cube) {
  const tempCube: Cube = JSON.parse(JSON.stringify(cube));
  for (let j = 0; j < 3; j += 1) {
    tempCube.F[j][0] = cube.U[j][0];
    tempCube.D[j][0] = cube.F[j][0];
  }
  tempCube.B[0][2] = cube.D[2][0];
  tempCube.B[1][2] = cube.D[1][0];
  tempCube.B[2][2] = cube.D[0][0];
  tempCube.U[0][0] = cube.B[2][2];
  tempCube.U[1][0] = cube.B[1][2];
  tempCube.U[2][0] = cube.B[0][2];
  tempCube.L = rotate90(tempCube.L);
  return tempCube;
}

function rotateF(cube: Cube) {
  const tempCube: Cube = JSON.parse(JSON.stringify(cube));
  for (let j = 0; j < 3; j += 1) {
    tempCube.L[j][2] = cube.D[0][j];
    tempCube.R[j][0] = cube.U[2][j];
  }
  tempCube.U[2][0] = cube.L[2][2];
  tempCube.U[2][1] = cube.L[1][2];
  tempCube.U[2][2] = cube.L[0][2];
  tempCube.D[0][0] = cube.R[2][0];
  tempCube.D[0][1] = cube.R[1][0];
  tempCube.D[0][2] = cube.R[0][0];
  tempCube.F = rotate90(tempCube.F);
  return tempCube;
}

function rotateB(cube: Cube) {
  const tempCube: Cube = JSON.parse(JSON.stringify(cube));
  for (let j = 0; j < 3; j += 1) {
    tempCube.U[0][j] = cube.R[j][2];
    tempCube.D[2][j] = cube.L[j][0];
  }
  tempCube.R[0][2] = cube.D[2][2];
  tempCube.R[1][2] = cube.D[2][1];
  tempCube.R[2][2] = cube.D[2][0];
  tempCube.L[0][0] = cube.U[0][2];
  tempCube.L[1][0] = cube.U[0][1];
  tempCube.L[2][0] = cube.U[0][0];
  tempCube.B = rotate90(tempCube.B);
  return tempCube;
}

// =======================
// Main Function
// =======================

function applyScramble(scrambleStr: string): Cube {
  let cube = solvedCube;
  const moves = scrambleStr.split(" ");
  for (let i = 0; i < moves.length; i += 1) {
    if (moves[i] === "U") {
      cube = rotateU(cube);
    } else if (moves[i] === "D") {
      cube = rotateD(cube);
    } else if (moves[i] === "R") {
      cube = rotateR(cube);
    } else if (moves[i] === "L") {
      cube = rotateL(cube);
    } else if (moves[i] === "F") {
      cube = rotateF(cube);
    } else if (moves[i] === "B") {
      cube = rotateB(cube);
    } else if (moves[i] === "U'") {
      cube = rotateU(rotateU(rotateU(cube)));
    } else if (moves[i] === "D'") {
      cube = rotateD(rotateD(rotateD(cube)));
    } else if (moves[i] === "R'") {
      cube = rotateR(rotateR(rotateR(cube)));
    } else if (moves[i] === "L'") {
      cube = rotateL(rotateL(rotateL(cube)));
    } else if (moves[i] === "F'") {
      cube = rotateF(rotateF(rotateF(cube)));
    } else if (moves[i] === "B'") {
      cube = rotateB(rotateB(rotateB(cube)));
    } else if (moves[i] === "U2") {
      cube = rotateU(rotateU(cube));
    } else if (moves[i] === "D2") {
      cube = rotateD(rotateD(cube));
    } else if (moves[i] === "R2") {
      cube = rotateR(rotateR(cube));
    } else if (moves[i] === "L2") {
      cube = rotateL(rotateL(cube));
    } else if (moves[i] === "F2") {
      cube = rotateF(rotateF(cube));
    } else if (moves[i] === "B2") {
      cube = rotateB(rotateB(cube));
    }
  }
  return cube;
}

export type { Color, Face, Cube };
export { solvedCube, applyScramble, colorMap };
