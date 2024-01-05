import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landingCont}>
      <NavLink to="/home">
        <button type="button" className={style.button}>
          ¡Go to Home!
        </button>
      </NavLink>
    </div>
  );
};

export default Landing;
