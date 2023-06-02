import ButtonGrid from "./ButtonGrid";

export default function Header() {

    return(
        <header>
            <h1 className="text-center mt-6 text-blue-500 dark:text-pink-500 font-bold text-4xl font-mono uppercase tracking-[20px]">Game of Life</h1>
            <ButtonGrid />
        </header>
    )
}