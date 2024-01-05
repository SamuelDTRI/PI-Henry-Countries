const { Router } = require("express");
const getAllCountriesHandler = require("../Handlers/getAllCountriesHandler");
const getCountryByIdHandler = require("../Handlers/getCountryByIdHandler");

const countriesRouter = Router();

countriesRouter.get("/", getAllCountriesHandler);
countriesRouter.get("/:id", getCountryByIdHandler);

module.exports = countriesRouter;
