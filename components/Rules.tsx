export default function Rules(){
    return(
        <div className="m-2 text-xl  max-w-md absolute right-0">
                <h2 className="text-center text-2xl p-2 m-2">Rules</h2>
                <ol className="m-2">
                    <li>
                    1. Any live cell with two or three live neighbours survives.
                    </li>
                    <li>
                    2. Any dead cell with three live neighbours becomes a live cell.
                    </li>
                    <li>
                    3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
                    </li>
                </ol>
            <h3 className="mt-4">Please select as many cells as you desire!</h3>
        </div>
    )
}