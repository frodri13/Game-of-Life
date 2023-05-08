'use client'
import { useState } from "react";

const numRows = 12;
const numCols = 12;

const Grid = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows;
  });

  console.table(grid)

  const handleCellClick = (row: number, col: number) => {
    const newGrid = [...grid];
    newGrid[row][col] = newGrid[row][col] ? 0 : 1;
    setGrid(newGrid);
  };

  return (
    <div className="grid grid-cols-12 gap-0 m-0 p-0">
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i}-${k}`}
            onClick={() => handleCellClick(i, k)}
            className={`w-20 h-10 ${
              grid[i][k] ? "bg-purple-500" : ""
            } border border-black`}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
