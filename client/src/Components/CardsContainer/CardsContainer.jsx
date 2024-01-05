import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../ComponentsIndex";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const allCountries = useSelector((state) => state.allCountries);

  return (
    <div className={style.CardsContainer}>
      {allCountries.map((c) => (
        <Card info={c} />
      ))}
    </div>
  );
};

export default CardsContainer;
