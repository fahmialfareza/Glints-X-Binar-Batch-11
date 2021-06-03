const express = require("express"); // Import express

// Import controller
const authController = require("../controllers/authController");

// Make router
const router = express.Router();

// All request from users will be redirect to this route
router.all("*", authController.auth);

// If user access /auth/signup (POST)
// router.post("/signup", authController.auth);

// If user access /auth/signin (POST)
// router.post("/signin", authController.auth);

module.exports = router;
