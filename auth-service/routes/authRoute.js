const express = require("express"); // Import express

// Import validator
const authValidator = require("../middlewares/validators/authValidator");

// Import controller
const authController = require("../controllers/authController");

// Import auth (middleware)
const auth = require("../middlewares/auth");
const { getMyProfile } = require("../controllers/authController");

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

// Check admin or not
router.get("/isAdmin", auth.admin, authController.getIdUser);

// Check user or not
router.get("/isUser", auth.user, authController.getIdUser);

// Check admin or user
router.get("/isAdminOrUser", auth.adminOrUser, authController.getIdUser);

// Get My Profile
router.get("/me", auth.adminOrUser, getMyProfile);

// Get User Profile
router.get("/profile/:id", authController.getUserProfile);

module.exports = router;
