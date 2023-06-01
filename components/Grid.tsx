'use client'
import Image from 'next/image';
import pause from '/public/static/images/pause.svg'
import play from '/public/static/images/play.svg'
import { useCallback, useRef, useState } from "react";

const numRows = 20;
const numCols = 20;

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

const createEmptyGrid = () => {
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numRows), () => 0));
  }

  return rows;
}

const Grid = () => {
  const [grid, setGrid] = useState(() => {
    return createEmptyGrid();
  });

  console.table(grid)

  const [running, setRunning] = useState(false)
  const runningRef = useRef(running);
  runningRef.current = running;


// check cell neighbors function

function checkAndAddNeighbors() {

  const newGrid = [...grid];

  for(let i = 0; i < numCols; i++){
    for(let j = 0; j < numRows; j++) {
      let neighbors = 0;
      operations.forEach(([x,y]) => {
        const newI = i + x;
        const newJ = j + y;


      // check neighbors and add up value to variable

      if(newI >= 0 && newI < numCols && newJ >= 0 && newJ < numRows ){
          neighbors += grid[newI][newJ];
        }
      })
      // if there are less than 2 or more than 3 set to 0
      if(neighbors < 2 || neighbors > 3) {
        newGrid[i][j] = 0;
        // if there are exactly 3 and the current value is 0 set
        // to 1
      } else if (grid[i][j] === 0 && neighbors === 3) {
        newGrid[i][j] = 1; 
      }
    }
  }

  setGrid(newGrid);
}

  const runSimulation = useCallback(() => {
    if(!runningRef.current) {
      return;
    }

    checkAndAddNeighbors();

    setTimeout(runSimulation, 600);
  },[])

  const handleCellClick = (row: number, col: number) => {
    console.log('clicked')
    const newGrid = [...grid];
    newGrid[row][col] = newGrid[row][col] ? 0 : 1;
    setGrid(newGrid);
  };


  const handleHover = (row: number,col: number) => {
    console.log('hovered')

  }

  function handlePlayPauseClick() {
    setRunning(!running);
    runningRef.current = true;
    runSimulation();
  }

  return (
    <>
          <button onClick={handlePlayPauseClick}>  {running ?
          <Image 
            src={pause}
            alt='pause'
            width={42}
            height={42}
            className='fixed p-2 z-10 right-20 top-4 bg-blue-300 hover:bg-blue-500
            dark:bg-pink-300 dark:hover:bg-pink-500 text-lg rounded-md'
          />
          : 
          <Image 
          src={play}
          alt='play'
          width={42}
          height={42}
          className='fixed p-2 z-10 right-20 top-4 bg-blue-300 hover:bg-blue-500
          dark:bg-pink-300 dark:hover:bg-pink-500 text-lg rounded-md'
        />
          } </button>
        <div 
        // className="grid grid-cols-12 gap-0 m-0 p-0"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 80px)`
        }}
        >
        {grid.map((rows, i) =>
            rows.map((col, j) => (
            <div
                key={`${i}-${j}`}
                onClick={() => handleCellClick(i, j)}
                onMouseEnter={() => handleHover(i, j)}
                className={`w-20 h-10 ${
                grid[i][j] ? "bg-blue-500 dark:bg-pink-500" : ""
            } border border-black dark:border-white`}
        />
        ))
    )}
    </div>
    </>
   
  );
};


export default Grid