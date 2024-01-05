import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ info }) => {
  return (
    <div className={style.Card}>
      <div className={style.info}>
        <img src={info.image} alt="image not loaded" />
        <Link to={`/detail/${info.id}`}>
          <h2>{info.name}</h2>
        </Link>
        <h2>Continent: {info.continent}</h2>
      </div>
    </div>
  );
};

export default Card;
