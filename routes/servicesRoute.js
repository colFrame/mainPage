//Router is configured
const express = require("express");
const router = express.Router();

//Controllers are required
const servicesController = require("../controllers/servicesController");

//Home route is configured
router.get("/", servicesController.display);

module.exports = router;
