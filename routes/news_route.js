const express = require("express");
const router = express.Router();
const newsControllr = require("../controllers/news_controller");
router.post("/", newsControllr.createNews);
router.get("/", newsControllr.getAllNews);
module.exports = router;
