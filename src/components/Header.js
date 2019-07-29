import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <div className="header">
            <div className="title">{props.children}</div>
            <div className="scores">
                Message: {props.message}
            </div>
            <div className="scores">
                Score: {props.score} High Score: {props.highScore}
            </div>
        </div>
    )
}

export default Header;