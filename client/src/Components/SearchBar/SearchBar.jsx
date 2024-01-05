import { searchCountry } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchCountry(country));
    document.getElementById("search").value = "";
  };

  return (
    <div className={style.searchBar}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <input
          id="search"
          type="text"
          onChange={handleChange}
          className={style.inputField}
          placeholder="Search country..."
        />
        <button type="submit" className={style.submitButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
