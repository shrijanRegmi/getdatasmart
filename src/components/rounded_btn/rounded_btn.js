import React from "react";
import { Link } from "react-router-dom";
import "./rounded_btn.scss";

function RoundedBtn({ title, color, destination, id }) {
  const returnType =
    destination !== null ? (
      <Link
        to={destination}
        id={id}
        style={{ border: `1px solid ${color}`, color: color }}
      >
        {title}
      </Link>
    ) : (
      <button id={id} style={{ border: `1px solid ${color}`, color: color }}>
        {title}
      </button>
    );
  return <div className="roundedBtn">{returnType}</div>;
}

export default RoundedBtn;
