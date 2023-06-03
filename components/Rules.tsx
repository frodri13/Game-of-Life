import Link from "next/link";

export default function Rules(){
    return(
        <div className="m-2 text-xl max-w-xs absolute mr-12 right-6 invisible lg:visible">
                <h2 className="text-center text-2xl p-2 m-2 text-bold text-blue-500 dark:text-pink-500">Rules</h2>
                <ol className="m-2 dark:text-white">
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
            <h3 className="mt-4 dark:text-white">Please select as many cells as you desire!</h3>
            <p className="mt-4 dark:text-white">If you are interested, please visit  
                <Link href={`https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life`}
                target="_blank"
                className="text-blue-500 hover:text-blue-800 dark:text-pink-500 dark:hover:text-pink-800"
                    > Conway&rsquo;s Game of Life</Link>.</p>
        </div>
    )
}