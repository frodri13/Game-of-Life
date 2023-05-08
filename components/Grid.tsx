'use client'
import { useCallback, useRef, useState } from "react";

const numRows = 12;
const numCols = 12;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
]

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

  const [running, setRunning] = useState(false)
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if(!runningRef.current) {
      return;
    }

    const newGrid = [...grid];
    
    for(let i = 0; i < numCols; i++){
      for(let j = 0; j < numRows; j++) {
        let neighbors = 0;
        operations.forEach(([x,y]) => {
          const newI = i + x;
          const newJ = j + y;
        
          if(newI >= 0 && newI < numCols && newJ >= 0 && newJ < numRows ){
            neighbors += grid[newI][newJ];
          }
        })

        if(neighbors < 2 || neighbors > 3) {
          newGrid[i][j] = 0;
        } else if (grid[i][j] === 0 && neighbors === 3) {
          newGrid[i][j] = 1; 
        }
      }
    }

    setGrid(newGrid);

    setTimeout(runSimulation, 1000);
  }, [])

  return (
    <>
        <button onClick={() =>{
            setRunning(!running);
            runningRef.current = true;
            runSimulation();
        }}
        >
          {running ? 'Stop' : 'Start'}
          </button>
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
    </>
   
  );
};

export default Grid;
