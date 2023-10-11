import React from "react";

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

interface DisplayCubeProps {
  cube: Cube;
  size: number;
}

export default function DisplayCube({cube, size}: DisplayCubeProps) {
    const colorMap = {
        W: "white",
        Y: "yellow",
        G: "green",
        B: "blue",
        R: "red",
        O: "orange",
        };
    return (
        <div
        style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
        <div
            id="cube-display"
            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
            <div
            id="L"
            style={{ flexDirection: "column", display: "flex", margin: "2px" }}
            >
            {cube.L.map((row, rowIndex) => (
                <div
                key={rowIndex}
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                {row.map((color, colIndex) => (
                    <div
                    key={colIndex}
                    style={{
                        backgroundColor: colorMap[color]
                        ? colorMap[color]
                        : "black",
                        height: size,
                        width: size,
                        borderRadius: "2px",
                        margin: "2px",
                    }}
                    />
                ))}
                </div>
            ))}
            </div>
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
            <div
                id="U"
                style={{ flexDirection: "column", display: "flex", margin: "2px" }}
            >
                {cube.U.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    }}
                >
                    {row.map((color, colIndex) => (
                    <div
                        key={colIndex}
                        style={{
                        backgroundColor: colorMap[color]
                            ? colorMap[color]
                            : "black",
                        height: size,
                        width: size,
                        borderRadius: "2px",
                        margin: "2px",
                        }}
                    />
                    ))}
                </div>
                ))}
            </div>
            <div
                id="F"
                style={{ flexDirection: "column", display: "flex", margin: "2px" }}
            >
                {cube.F.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    }}
                >
                    {row.map((color, colIndex) => (
                    <div
                        key={colIndex}
                        style={{
                        backgroundColor: colorMap[color]
                            ? colorMap[color]
                            : "black",
                        height: size,
                        width: size,
                        borderRadius: "2px",
                        margin: "2px",
                        }}
                    />
                    ))}
                </div>
                ))}
            </div>
            <div
                id="D"
                style={{ flexDirection: "column", display: "flex", margin: "2px" }}
            >
                {cube.D.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    }}
                >
                    {row.map((color, colIndex) => (
                    <div
                        key={colIndex}
                        style={{
                        backgroundColor: colorMap[color]
                            ? colorMap[color]
                            : "black",
                        height: size,
                        width: size,
                        borderRadius: "2px",
                        margin: "2px",
                        }}
                    />
                    ))}
                </div>
                ))}
            </div>
            </div>

            <div
            id="R"
            style={{ flexDirection: "column", display: "flex", margin: "2px" }}
            >
            {cube.R.map((row, rowIndex) => (
                <div
                key={rowIndex}
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                {row.map((color, colIndex) => (
                    <div
                    key={colIndex}
                    style={{
                        backgroundColor: colorMap[color]
                        ? colorMap[color]
                        : "black",
                        height: size,
                        width: size,
                        borderRadius: "2px",
                        margin: "2px",
                    }}
                    />
                ))}
                </div>
            ))}
            </div>
            <div
            id="B"
            style={{ flexDirection: "column", display: "flex", margin: "2px" }}
            >
            {cube.B.map((row, rowIndex) => (
                <div
                key={rowIndex}
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                {row.map((color, colIndex) => (
                    <div
                    key={colIndex}
                    style={{
                        backgroundColor: colorMap[color]
                        ? colorMap[color]
                        : "black",
                        height: size,
                        width: size,
                        borderRadius: "2px",
                        margin: "2px",
                    }}
                    />
                ))}
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}
