const express = require("express");
const router = require("express-promise-router")();
const userControllr = require("../controllers/user_controller");
const { validateBody, schemas } = require("../helpers/route_helper");

router.route("/").post(validateBody(schemas.userSchema), userControllr.create);

module.exports = router;
