const getAllActivities = require("../Controllers/getAllActivitiesController");

const getActivities = async (req, res) => {
  try {
    const response = await getAllActivities();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getActivities;
