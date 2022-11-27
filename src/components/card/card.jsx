import React from "react";
import NavBar from "./Navbar/navbar";
import "./app.css"



function Card(props) {
    return <div>
        <img src={props.src} height = {100}></img>
        <h2>{props.title}</h2>
        <h4>By {props.author} </h4>
        <a href={props.link}>Link to archive.org</a>
    </div>

}

export default Card;