// Detail.jsx
import React, { useEffect } from "react";
import { NavBar } from "../../Components/ComponentsIndex";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, getCountryById } from "../../Redux/Actions/Actions";

const Detail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getCountryById(params.id));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, params.id]);

  return (
    <div className={style.DetailContainer}>
      <div className={style.Detail}>
        <div className={style.contDetail}>
          <div className={style.details_id}>ID: {details.id}</div>
          <div className={`${style.name} enlargedInfo`}>{details.name}</div>
          <div>
            <img src={details.image} alt={`${details.name} Flag`} />
          </div>
          <div className="enlargedInfo">Continent: {details.continent}</div>
          <div className="enlargedInfo">Capital: {details.capital}</div>
          <div className="enlargedInfo">Subregion: {details.subregion}</div>
          <div className="enlargedInfo">Area: {details.area}</div>
          <div className="enlargedInfo">Population: {details.population}</div>

          {/* Renderizar actividades como divs */}
          <div className="enlargedInfo activities-header">Activities : </div>
          <div className={style.activitiesList}>
            {details.Activities &&
              details.Activities.map((activity) => (
                <div key={activity.name} className={style.activityItem}>
                  <strong>Name:</strong> {activity.name}
                  <br />
                  <strong>Difficulty:</strong> {activity.difficulty}
                  <br />
                  <strong>Duration:</strong> {activity.duration}
                  <br />
                  <strong>Season:</strong> {activity.season}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
