const express = require("express");
const router = require("express-promise-router")();
const teamMemberControllr = require("../controllers/teammembers_controller");
const { schemas, validateBody } = require("../helpers/route_helper");
router
  .route("/")
  .get(teamMemberControllr.getAllMembers)
  .post(validateBody(schemas.teammemberSchema),teamMemberControllr.addTeamMember);
module.exports = router;
