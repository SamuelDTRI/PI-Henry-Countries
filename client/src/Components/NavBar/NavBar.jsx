import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SearchBar } from "../ComponentsIndex";
import {
  countriesFilter,
  filterByActivities,
  filterByPopulation,
  filterByPopulationAscending,
  filterCards,
  page,
  resetHome,
} from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);
  const activities = useSelector((state) => state.activities);

  const pagination = (event) => {
    dispatch(page(event.target.name));
  };

  const filters = (event) => {
    dispatch(countriesFilter(event.target.name));
  };

  const resetCountries = () => {
    dispatch(resetHome());
  };

  const filterByPop = () => {
    dispatch(filterByPopulation());
  };

  const filterByPopAscending = () => {
    dispatch(filterByPopulationAscending());
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleActivitiesFilter = (event) => {
    dispatch(filterByActivities(event.target.value));
  };

  return (
    <div className={style.NavBar}>
      {location.pathname !== "/landing" && location.pathname !== "/home" && (
        <NavLink
          to="/home"
          className={style.NavLink}
          activeClassName={style.activeLink}>
          Home
        </NavLink>
      )}
      {location.pathname !== "/form" && (
        <NavLink
          to="/form"
          className={style.NavLink}
          activeClassName={style.activeLink}>
          Form
        </NavLink>
      )}
      {location.pathname !== "/" && location.pathname !== "/landing" && (
        <NavLink
          to="/landing"
          className={style.NavLink}
          activeClassName={style.activeLink}>
          Landing
        </NavLink>
      )}

      {location.pathname === "/home" && (
        <>
          <SearchBar></SearchBar>

          <button onClick={resetCountries}>¡Reset Countries!</button>

          <button name="A-Z" onClick={filters}>
            A-Z
          </button>
          <button name="Z-A" onClick={filters}>
            Z-A
          </button>

          <div>
            <button name="filterByPop" onClick={filterByPop}>
              Filter by Population (Dsc)
            </button>

            <button name="filterByPopAscending" onClick={filterByPopAscending}>
              Filter by Population (Asc)
            </button>
          </div>

          <div>
            <select onChange={handleFilter}>
              <option value="" disabled selected>
                Continents
              </option>
              <option value="Todos">Todos</option>
              <option value="America">América</option>
              <option value="Asia">Asia</option>
              <option value="Africa">África</option>
              <option value="Europe">Europe</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Oceania">Oceanía</option>
            </select>
          </div>
          {/* {console.log(activities)} */}
          <div>
            <select onChange={handleActivitiesFilter}>
              <option value="" disabled selected>
                Activities
              </option>
              {Array.isArray(activities) &&
                  activities.map((activity) => (
                    <option key={activity.id} value={activity.name}>
                      {activity.name}
                    </option>
                  ))}
            </select>
          </div>

          <div>
            <label>Page</label>
            <button name="prev" onClick={pagination}>
              Prev
            </button>
            {currentPage + 1}
            <button name="next" onClick={pagination}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
