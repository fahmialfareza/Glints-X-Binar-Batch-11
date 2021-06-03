const express = require("express"); // Import express

// Import controller
const goodController = require("../controllers/goodController");

// Make router
const router = express.Router();

// All request from users will be redirect to this route
router.all("*", goodController.good);

module.exports = router;
