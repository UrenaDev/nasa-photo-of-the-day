import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./card";

export default function CardDisplay ({limit}) {
  const [cardInfo, setCardInfo] = useState({});
  const [randomPhoto, setRandomPhoto] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=BSWSQP6BLrCtuvUEZI3Hq7CWSGe3k5ejg091vHa7`)
      .then(response => {
        console.log(response.data);
        setCardInfo(response.data);
      });
  });



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