const { Country, Activity } = require("../db");

const getAll = async () => {
  const allCountries = await Country.findAll({
    order: [["name", "ASC"]],
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
    },
  });
  return allCountries;
};

const getAllCountries = async (name) => {
  const allCountries = await getAll();

  if (name) {
    let filterCountryName = allCountries.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
    if (!filterCountryName.length) {
      console.log(filterCountryName);
      throw Error(`No country with the '${name}' found`);
    } else {
      return filterCountryName;
    }
  }
  return allCountries;
};

module.exports = getAllCountries;
