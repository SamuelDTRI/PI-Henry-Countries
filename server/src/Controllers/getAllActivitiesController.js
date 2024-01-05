const { Activity, Country } = require("../db");

const getAllActivities = async () => {
  const allActivities = await Activity.findAll({ order: [["name", "ASC"]], 
  include: [{
    model: Country,
    as:   "Countries",
    attributes: ["id", "name" ],
    through: { attributes: []}
  }],
});

  if (!allActivities.length) {
    throw Error("There are no activities created");
  }
  return allActivities;
};

module.exports = getAllActivities;
