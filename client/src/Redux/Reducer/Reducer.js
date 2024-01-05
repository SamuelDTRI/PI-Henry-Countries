import {
  GET_COUNTRIES_HOME,
  SEARCH_COUNTRY_BYNAME,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_ID,
  CLEAR_DETAILS,
  PAGINATE,
  FILTER,
  FILTER_CONTINENT,
  RESET,
  GET_COUNTRIES_FORM,
  FILTER_BY_POPULATION,
  FILTER_BY_POPULATION_ASCENDING,
  FILTER_BY_ACTIVITIES,
} from "../Actions/Action-Types";

let initialState = {
  allCountriesForm: [],
  allCountries: [],
  allCountriesBackUp: [],
  countriesFiltered: [],
  activities: [],
  details: {},
  filters: false,
  currentPage: 0,
};

function rootReducer(state = initialState, action) {
  const itemsPerPage = 10;

  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case GET_COUNTRIES_FORM:
      return {
        ...state,
        allCountriesForm: action.payload,
      };

    case GET_COUNTRIES_HOME:
      return {
        ...state,
        allCountries: [...action.payload].splice(0, itemsPerPage),
        allCountriesBackUp: action.payload,
      };

    case SEARCH_COUNTRY_BYNAME:
      return {
        ...state,
        allCountries: action.payload,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        details: {},
      };


    case PAGINATE:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      const firstIndex =
        action.payload === "next"
          ? nextPage * itemsPerPage
          : prevPage * itemsPerPage;

      if (state.filters) {
        if (
          action.payload === "next" &&
          firstIndex >= state.countriesFiltered.length
        )
          return state;
        else if (action.payload === "prev" && prevPage < 0) return state;
        return {
          ...state,
          allCountries: [...state.countriesFiltered].splice(
            firstIndex,
            itemsPerPage
          ),
          currentPage: action.payload === "next" ? nextPage : prevPage,
        };
      }

      if (
        action.payload === "next" &&
        firstIndex >= state.allCountriesBackUp.length
      )
        return state;
      else if (action.payload === "prev" && prevPage < 0) return state;

      return {
        ...state,
        allCountries: [...state.allCountriesBackUp].splice(
          firstIndex,
          itemsPerPage
        ),
        currentPage: action.payload === "next" ? nextPage : prevPage,
      }; //desde donde te digo o firstindex, quiero que me renderices x numero de items o en este caso itemps perpage

    case FILTER:
      switch (action.payload) {
        case "A-Z":
          let asc = [];
          if (state.filters) {
            asc = [...state.countriesFiltered].sort((prev, next) => {
              if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
              if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
              return 0;
            });
            return {
              ...state,
              allCountries: [...asc].splice(0, itemsPerPage),
              countriesFiltered: asc,
              currentPage: 0,
            };
          } else {
            asc = [...state.allCountriesBackUp].sort((prev, next) => {
              if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
              if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
              return 0;
            });
            return {
              ...state,
              allCountries: [...asc].splice(0, itemsPerPage),
              allCountriesBackUp: asc,
              currentPage: 0,
            };
          }

        case "Z-A":
          let dsc = [];
          if (state.filters) {
            dsc = [...state.countriesFiltered].sort((prev, next) => {
              if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
              if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
              return 0;
            });
            return {
              ...state,
              allCountries: [...dsc].splice(0, itemsPerPage),
              countriesFiltered: dsc,
              currentPage: 0,
            };
          } else {
            dsc = [...state.allCountriesBackUp].sort((prev, next) => {
              if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
              if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
              return 0;
            });
            return {
              ...state,
              allCountries: [...dsc].splice(0, itemsPerPage),
              allCountriesBackUp: dsc,
              currentPage: 0,
            };
          }

        default:
          return state;
      }

    case FILTER_BY_POPULATION:
      const sortByPopulation = [...state.allCountriesBackUp].sort((a, b) => {
        return b.population - a.population;
      });

      return {
        ...state,
        allCountries: [...sortByPopulation].splice(0, itemsPerPage),
        countriesFiltered: sortByPopulation,
        currentPage: 0,
        filters: true,
      };

      break;

    case FILTER_BY_POPULATION_ASCENDING:
      const sortByPopulationAscending = [...state.allCountriesBackUp].sort(
        (a, b) => {
          return a.population - b.population;
        }
      );

      return {
        ...state,
        allCountries: [...sortByPopulationAscending].splice(0, itemsPerPage),
        countriesFiltered: sortByPopulationAscending,
        currentPage: 0,
        filters: true,
      };

    case RESET:
      let resetCountries = [...state.allCountriesBackUp].splice(
        state.currentPage * itemsPerPage,
        itemsPerPage
      );

      return {
        ...state,
        allCountries: resetCountries,
        currentPage: 0,
        filters: false,
        countriesFiltered: [],
      };
    
    case FILTER_BY_ACTIVITIES:
      const countrs = state.allCountriesBackUp;
      const toActivities = state.activities;
      let coincidences = [];


      const response = toActivities.filter((activity) => activity.name === action.payload); // actividades acoinc, payload
      response[0].Countries?.map(country => countrs.map(x => country.name == x.name ? coincidences.push(x) : false )); ///paises asociados act

      return{
        ...state,
        allCountries: coincidences,
        currentPage: 0
      }

      // console.log("esto es coincidences", coincidences);
      // console.log("esto es reponse", response[0].Countries);
      // console.log("esto es countrs", countrs);
      // console.log("esto es toactivities",toActivities);
      // console.log("esto es payload", action.payload);


    case FILTER_CONTINENT:
      if (action.payload === "Todos") {
        return { ...state, allCountries: state.allCountriesBackUp, currentPage: 0 };
      } else if (action.payload === "America") {
        state.allCountries = state.allCountriesBackUp;
        const FilteredCountries = state.allCountries.filter(
          (country) =>
            country.continent == "North America" ||
            country.continent == "South America"
        );
        return { ...state, allCountries: FilteredCountries, currentPage: 0 };
      } else {
        state.allCountries = state.allCountriesBackUp;
        const FilteredCountries = state.allCountries.filter(
          (country) => country.continent == action.payload
        );  
        return {
          ...state,
          allCountries: FilteredCountries,
          currentPage: 0,
        };
      }


    default:
      return state;
  }
}

export default rootReducer;
