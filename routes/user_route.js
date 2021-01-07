const express = require("express");
const router = require("express-promise-router")();
const userControllr = require("../controllers/user_controller");
const {
  validateParams,
  schemas,
  validateBody,
} = require("../helpers/route_helper");
router.route("/").get(userControllr.findAll);

router
  .route("/:userId")
  .get(
    validateParams(schemas.isSchemas, "userId"),
    userControllr.getUserProfile
  );

router
  .route("/:userId/technologies")
  .get(
    validateParams(schemas.isSchemas, "userId"),
    userControllr.getUsersTechnologies
  )
  .post(
    validateBody(schemas.technologySchema),
    userControllr.newUserTechnology
  );
module.exports = router;
