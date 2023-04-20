import React from "react";
import '../styles/Button.css'

const Button = function (props) {
    return (
        <div>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
}

export default Button;