const express = require("express"); // Import express
const passport = require("passport"); // Import passport

// Import validator
const authValidator = require("../middlewares/validators/authValidator");

// Import controller
const authController = require("../controllers/authController");

// Import auth (middleware)
const auth = require("../middlewares/auth");

// Make router
const router = express.Router();

// If user access /auth/signup (POST)
router.post(
  "/signup",
  authValidator.signup,
  auth.signup,
  authController.getToken
);

// If user access /auth/signin (POST)
router.post(
  "/signin",
  authValidator.signin,
  auth.signin,
  authController.getToken
);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["email", "profile"],
  })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: process.env.OAUTH_CALLBACK_FRONTEND + "/auth/signin",
  }),
  authController.getToken
);

module.exports = router;
