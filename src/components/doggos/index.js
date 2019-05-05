import React from "react";
import "./doggopieces.css";

function doggocard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span className="remove">𝘅</span>
    </div>
  );
}

export { default } from "./doggopieces";