const express = require("express"); // Import express

// Import controller
const transactionController = require("../controllers/transactionController");

// Make router
const router = express.Router();

// All request from users will be redirect to this route
router.all("*", transactionController.transaction);

module.exports = router;
