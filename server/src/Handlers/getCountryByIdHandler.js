const  getCountryByID  = require("../Controllers/getCountryByIdController");

const getCountryByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getCountryByID(id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountryByIdHandler;
