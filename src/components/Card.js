import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <strong>Id:</strong> {props.id}
            </div>
        </div>
    );
}

export default Card;