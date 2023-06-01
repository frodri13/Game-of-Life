import DarkModeToggle from "./DarkModeToggle";
import MinusButton from "./MinusButton";
import PausePlay from "./PausePlay";
import PlusButton from "./PlusButton";

export default function ButtonGrid(){
    return(
        <div>
            <DarkModeToggle /> 
            <PausePlay />
            <PlusButton />
            <MinusButton />
        </div>
    )
}