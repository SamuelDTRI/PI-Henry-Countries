import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getCountriesForm } from "../../Redux/Actions/Actions";
import { useEffect } from "react";
import { SEASONS, DIFFICULT, HOURS } from "../../Utils/Utils";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountriesForm);

  useEffect(() => {
    dispatch(getCountriesForm());
  }, [dispatch]);

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  const handleChange = (event) => {
    if (event.target.name === "country") {
      setState({
        ...state,
        country: [...state.country, event.target.value],
      });
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
    validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const validate = (state, name) => {
    switch (name) {
      case "name":
        if (state.name === "") setErrors({ ...errors, name: "Field Required" });
        else if (state.name.length > 18)
          setErrors({ ...errors, name: "Character limit exceeded" });
        else if (state.name.length < 5)
          setErrors({ ...errors, name: "please write more characters" });
        else setErrors({ ...errors, name: "" });
        break;
      case "difficulty":
        if(state.difficulty === "No Difficulty") setErrors({ ...errors, difficulty: "Select Difficulty"})
        else setErrors({ ...errors, difficulty: "" });  
        break;
      case "duration":
        if(state.duration === "No Fixed Duration") setErrors({ ...errors, duration: "Select Duration"})
        else setErrors({ ...errors, duration: "" });  
        break;
      case "season":
        if(state.season === "No Season") setErrors({ ...errors, season: "Select Season"})
        else setErrors({ ...errors, season: "" });  
        break;
      case "country":
        if(state.country.length === 0) setErrors({ ...errors, country: "Select Country"})
        else setErrors({ ...errors, country: "" });  
        break;
      default:
        break;
    }
  };
  
  const disable = () => {
    let aux = true;
    for (let error in errors) {
      if (errors[error] !== "") {
        aux = true;
        break;
      } else {
        aux = false;
      }
    }
    return aux;
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivity(state));
  };

  return (
    <div className={style.formCont}>
      {console.log(state)}
      <div className={style.FormContainer}></div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Name: </label>
        <input name="name" onChange={handleChange} type="text" />
        {errors.name} 

        <label>Difficulty: </label>
        <select name="difficulty" onChange={handleChange}>
          <option disabled defaultValue={0}>
            From 1 to 5...
          </option>
          {DIFFICULT.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.difficulty} 

        <label>Duration: </label>
        <select name="duration" onChange={handleChange}>
          <option disabled defaultValue={0}>
            Select duration...
          </option>
          {HOURS.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.duration} 

        <label>Season: </label>
        <select name="season" onChange={handleChange}>
          <option disabled defaultValue={0}>
            Select season...
          </option>
          {SEASONS.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.season} 

        <label>Country</label>
        <select onChange={handleChange} name="country">
          <option disabled selected>
            Select Country
          </option>
          {allCountries.map((country) => (
            <option key={country.name} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country} 
        
        <button disabled={disable()} type="submit" className={style.submit}>
          - Submit -
        </button>
      </form>
    </div>
  );
};

export default Form;
