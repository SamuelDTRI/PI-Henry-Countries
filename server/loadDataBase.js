const axios = require("axios");
const { Country } = require("./src/db");

const loadDataBase = async () => {
  const allCountriesApi = await Country.findAll();
  if (!allCountriesApi.length) {
    const apiRes = await axios.get("http://localhost:5000/countries");
    let apiCountries = apiRes.data.map((elem) => {
      return {
        id: elem.cca3,
        name: elem.name.common,
        image: elem.flags.png,
        continent: elem.continents[0],
        capital: elem.capital ? elem.capital[0] : "Not found",
        subregion: elem.subregion ? elem.subregion : "No tiene subregión",
        area: elem.area,
        population: elem.population,
        maps: elem.maps.openStreetMaps,
      };
    });
    await Country.bulkCreate(apiCountries);
    console.log("Database has been loaded");
  }
};

module.exports = loadDataBase;
