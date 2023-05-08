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
        <div>Grid</div>
    )
}

export default Grid;