import React from "react";

const Card = props => {

  return (
    <div className="card " key={props.id}>
      <img className="card-image" alt="Image of the day" src={props.url} />
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  );
};

export default Card;