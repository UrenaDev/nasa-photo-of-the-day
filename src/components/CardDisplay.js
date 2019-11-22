import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./card";

export default function CardDisplay ({limit}) {
  const [cardInfo, setCardInfo] = useState({});
  const [randomPhoto, setRandomPhoto] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=wn0a4qml9WdoA3t7lgNhYBv3qUxfYr7IdKa2t12p`)
      .then(response => {
        console.log(response.data);
        setCardInfo(response.data);
      });
  }, {});



  return (
    <div className = "container">
      <Card
      key  = {cardInfo.url}
      title = {cardInfo.title}
      date = {cardInfo.date}
      url = {cardInfo.url}
      explanation = {cardInfo.explanation} />
      <button>Refresh Photo</button>

    </div>
  );
}