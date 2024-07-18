import React from "react";
import "./Card.css";

function Card({ title, desc }) {
  return (
    <div className="cards">
      <div className="cardBody">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
