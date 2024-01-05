import React, { useEffect } from "react";
import { CardsContainer } from "../../Components/ComponentsIndex";
import { getActivities, getCountries } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.HomeCont}>
      <div className={style.CardsContainer}>
        {/* {console.log(allCountries)} */}
        <CardsContainer allCountries={allCountries} />
      </div>
    </div>
  );
};

export default Home;
