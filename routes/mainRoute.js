//Router is configured
const express = require("express");
const router = express.Router();

//Controllers are required
const mainController = require("../controllers/mainController");

//Home route is configured
router.get("/", mainController.display);

module.exports = router;
