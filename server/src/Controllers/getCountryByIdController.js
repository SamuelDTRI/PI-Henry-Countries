const { Country, Activity } = require("../db");

const getCountryByID = async (id) => {
  id = id.toUpperCase();
  if (id.length === 3) {
    const country = await Country.findOne({
      where: { id },
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
      },
    });
    if (country === null) {
      throw Error(`No country found with ID: ${id}`);
    } else {
      return country;
    }
  } else {
    throw Error("Invalid ID. Must be 3 characters...");
  }
};

module.exports = getCountryByID;
