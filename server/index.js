const loadDataBase = require("./loadDataBase.js");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    server.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
      const allCountries = await Country.findAll();
      if (!allCountries.length) {
        loadDataBase();
      } else {
        console.log("Database Loaded");
      }
    });
  })
  .catch((error) => console.error(error));
