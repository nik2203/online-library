import React from "react";
import books from "../../card/dump"
import Card from "../../card/card";
import "./dash.css"

function createCard(books) {
  return (
    <Card
      title={books.title}
      author={books.author}
      link={books.link}
    />
  );
}

function Dash() {
  return (
    <div>
      <div className="dashboard">
        <h1 className="heading">Jinchi Books</h1>
        <center>
          <div>
            {books.map(createCard)}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Dash;