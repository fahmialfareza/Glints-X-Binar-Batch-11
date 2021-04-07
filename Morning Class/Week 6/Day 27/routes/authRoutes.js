const express = require("express"); // Import express
const passport = require("passport"); // Import passport

// Import validator

// Import controller
const authController = require("../controllers/authController");

// Import auth (middleware)
const auth = require("../middlewares/auth");

// Make router
const router = express.Router();

// If user access /auth/signup (POST)
router.post("/signup", auth.signup, authController.getToken);

// If user access /auth/signin (POST)
router.post("/signin", auth.signin, authController.getToken);

module.exports = router;
