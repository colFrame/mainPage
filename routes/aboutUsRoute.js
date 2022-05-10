//Router is configured
const express = require("express");
const router = express.Router();

//Controllers are required
const aboutUsController = require("../controllers/aboutUsController");

//Home route is configured
router.get("/", aboutUsController.display);

module.exports = router;
