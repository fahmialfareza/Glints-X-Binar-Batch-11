const express = require("express"); // Import express

// Import controller
const authController = require("../controllers/authController");

// Make router
const router = express.Router();

// If user access /auth/signup (POST)
router.post("/signup", authController.signup);

// If user access /auth/signin (POST)
// router.post(
//   "/signin",
//   authValidator.signin,
//   auth.signin,
//   authController.getToken
// );

module.exports = router;
