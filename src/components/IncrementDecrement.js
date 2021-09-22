import React, {useState} from "react";
import ButtonComponent from "./General/Button";

const IncrementDecrementComponent = () => {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);

    return (
        <div>
            <p>My new component</p>
            <p>Counter: {counter}</p>
            <ButtonComponent onClickFunction={incrementCounter} label={"Increment"}/>
            <ButtonComponent onClickFunction={decrementCounter} label={"Decrement"}/>
        </div>
    );
}

export default IncrementDecrementComponent;