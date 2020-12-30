const express = require("express");
const router = express.Router();
const techControllr = require("../controllers/technology_controller");
router.post("/", techControllr.addTech);
router.get("/", techControllr.getAllTech);
module.exports = router;
