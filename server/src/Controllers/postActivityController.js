const { Country, Activity } = require("../db");

const postActivity = async (id, name, difficulty, duration, season, countries) => {
  const createActivity = await Activity.create({
    id,
    name,
    difficulty,
    duration,
    season,
  });

  // const countryInstances = await Country.findAll({
  //   where: { name: countries },
  // });

  // if (countryInstances.length > 0) {
  //   await createActivity.setCountries(countryInstances);
  // }

  countries.map(async(id) => await createActivity.setCountries(id))

  return createActivity;
};

module.exports = postActivity;


