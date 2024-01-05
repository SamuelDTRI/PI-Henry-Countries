const  postActivity  = require("../Controllers/postActivityController");

const postActivityHandler = async (req, res) => {
  const { id, name, difficulty, duration, season, country } = req.body;

  try {
    const response = await postActivity(
      id,
      name,
      difficulty,
      duration,
      season,
      country
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postActivityHandler;
