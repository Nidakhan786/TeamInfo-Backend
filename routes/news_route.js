const express = require("express");
const router = require("express-promise-router")();
const { schemas, validateBody } = require("../helpers/route_helper");
const newsControllr = require("../controllers/news_controller");

router
  .route("/")
  .get(newsControllr.getAllNews)
  .post(validateBody(schemas.newsSchema), newsControllr.createNews);

module.exports = router;
