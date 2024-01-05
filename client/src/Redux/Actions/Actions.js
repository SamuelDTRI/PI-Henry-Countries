import axios from "axios";
import {
  GET_COUNTRIES_HOME,
  SEARCH_COUNTRY_BYNAME,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_ID,
  CLEAR_DETAILS,
  PAGINATE,
  FILTER,
  RESET,
  GET_COUNTRIES_FORM,
  FILTER_BY_POPULATION,
  FILTER_BY_POPULATION_ASCENDING,
  FILTER_CONTINENT,
  FILTER_BY_ACTIVITIES,
} from "../Actions/Action-Types";
const URL_COUNTRIES = "http://localhost:3001/countries";
const URL_ACTIVITIES = "http://localhost:3001/activities";
export function postActivity(state) {
  return async function (dispatch) {
    try {
      const response = await axios.post(URL_ACTIVITIES, state);
      alert("Activity created successfully.");
      console.log(response);
    } catch (error) {
      alert(error.response.data.error); 
    }
  };
}
export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get(URL_COUNTRIES);
      dispatch({
        type: GET_COUNTRIES_HOME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
}
export function getCountriesForm() {
  return async function (dispatch) {
    try {
      const response = await axios.get(URL_COUNTRIES);
      dispatch({
        type: GET_COUNTRIES_FORM,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
}
export function searchCountry(country) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_COUNTRIES}?name=${country}`);
      dispatch({
        type: SEARCH_COUNTRY_BYNAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
}
export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios.get(URL_ACTIVITIES);
      dispatch({
        type: GET_ACTIVITIES,
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
export function getCountryById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_COUNTRIES}/${id}`);
      dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
export function clearDetails() {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAR_DETAILS,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
export function page(order) {
  return function (dispatch) {
    try {
      dispatch({
        type: PAGINATE,
        payload: order,
      });
      // console.log(order);
    } catch (error) {
      alert("not found pagination");
    }
  };
}
export function countriesFilter(order) {
  return function (dispatch) {
    try {
      dispatch({
        type: FILTER,
        payload: order,
      });
    } catch (error) {
      alert("not found FILTERS");
    }
  };
}

export function resetHome() {
  return function (dispatch) {
    try {
      dispatch({
        type: RESET,
      });
    } catch (error) {
      alert("not found RESET");
    }
  };
}
export function filterByPopulation() {
  return function (dispatch) {
    try {
      dispatch({
        type: FILTER_BY_POPULATION,
      });
    } catch (error) {
      alert("Error filtering by population Descending");
    }
  };
}
export function filterByPopulationAscending() {
  return function (dispatch) {
    try {
      dispatch({
        type: FILTER_BY_POPULATION_ASCENDING,
      });
    } catch (error) {
      alert("Error filtering by population (ascending)");
    }
  };
}
export const filterCards = (continente) => {
  return {
    type: FILTER_CONTINENT,
    payload: continente,
  };
};

export const filterByActivities = (activity) => {
  // console.log("entro a la action");
  return {
    type: FILTER_BY_ACTIVITIES,
    payload: activity,
  };
};


