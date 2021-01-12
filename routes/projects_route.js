const express = require("express");
const router = require("express-promise-router")();
const { schemas, validateBody } = require("../helpers/route_helper");
const projectsControllr = require("../controllers/projects_controller");

router
  .route("/")
  .get(projectsControllr.getAllProjects)
  .post(validateBody(schemas.projectsSchema), projectsControllr.createProjects);

module.exports = router;
