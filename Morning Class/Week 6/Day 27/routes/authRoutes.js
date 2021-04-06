const express = require("express"); // Import express
const passport = require("passport"); // Import passport

// Import validator

// Import controller
const authController = require("../controllers/authController");

// Import auth (middleware)
require("../middlewares/auth");

// Make router
const router = express.Router();

// If user access /auth/signup (POST)
router.post(
  "/signup",
  (req, res, next) => {
    // It will go to ../middlewares/auth/index.js -> passport.use("signup")
    passport.authenticate("signup", { session: false }, (err, user, info) => {
      // After go to ../middlewares/auth/index.js -> passport.use("signup")
      // It will bring the variable from done() function
      // Like err = null, user = false, info = { message: "User can't be creted" }
      // Or err = null, user = userSignUp, info = { message: "User can be creted" }

      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }

      // If user is false
      if (!user) {
        return res.status(401).json({
          message: info.message,
        });
      }

      // Make req.user that will be save the user value
      // And it will bring to controller
      req.user = user;

      // Next to authController.getToken
      next();
    })(req, res, next);
  },
  authController.getToken
);

module.exports = router;
