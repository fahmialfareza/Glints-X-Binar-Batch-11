const express = require("express");

// Import validator
const transactionValidator = require("../middlewares/validators/transactionValidator");

// Import controller
const transactionController = require("../controllers/transactionController");

// Import auth (middleware)
const { isAdmin, isUser, isAdminOrUser } = require("../middlewares/auth");

// Make router
const router = express.Router();

router
  .route("/")
  .get(isAdminOrUser, transactionController.getAll)
  .post(isUser, transactionValidator.create, transactionController.create);

router
  .route("/:id")
  .get(
    isAdminOrUser,
    transactionValidator.getOne,
    transactionController.getOne
  );

module.exports = router;
