const getAllCountries = require("../Controllers/getAllCountriesController");

const getAllCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getAllCountries(name);
      return res.status(200).json(response);
    }
    const response = await getAllCountries();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getAllCountriesHandler;
