const express = require("express");
const router = require("express-promise-router")();
const techControllr = require("../controllers/technology_controller");
const { schemas, validateBody } = require("../helpers/route_helper");

router
  .route("/")
  .get(techControllr.getAllTech)
  .post(validateBody(schemas.technologySchema), techControllr.addTech);

module.exports = router;
