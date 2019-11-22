import React from "react";
import {Card as CardStyle} from "reactstrap";

const Card = props => {

  return (
    <div className="card " key={props.id}>
      <CardStyle color="info" className="text-white">
        <img className="card-image" alt="Picture of the day" src={props.url} />
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p>{props.explanation}</p>
      </CardStyle>
    </div>
  );
};

export default Card;