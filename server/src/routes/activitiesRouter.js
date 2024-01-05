const { Router } = require("express");
const  getActivities  = require("../Handlers/getAllActivitiesHandler");
const  postActivityHandler  = require("../Handlers/postActivityHandler");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);
activitiesRouter.post("/", postActivityHandler );

module.exports = activitiesRouter;
