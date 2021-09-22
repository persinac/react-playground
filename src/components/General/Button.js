import React from "react";

const ButtonComponent = (props) => {
    return (
        <button style={{ margin: ".5em"}} onClick={props.onClickFunction}>{props.label}</button>
    )
};

export default ButtonComponent;