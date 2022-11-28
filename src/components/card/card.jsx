import React from "react";
import "./card.css"



function Card(props) {
    return <div className="book">
        <a href={props.link} target="_blank">{props.title}</a>
        <h4>By {props.author} </h4>
    </div>

}

export default Card;