'use client'

import { useState } from "react";

const numRows = 50;
const numCols = 50;

const Grid = () => {
    const [grid, setGrid] = useState(() => {
        const rows = [];

        for(let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0));
        }

        return rows;
    });

    console.log(grid);

    return(
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 20px)`
        }
        }>
            {grid.map((rows, i) => 
                rows.map((col, k) => (
                    <div 
                        key={`${i}-${k}`}
                        className={`w-20 h-10 ${ grid[i][k] ? 'bg-pink-500' : '' } border border-black`}
                    />
                ))
            )}
        </div>
    )
}

export default Grid;