const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import auth
const { isAdmin, isUser, isAdminOrUser } = require("../middlewares/auth");

// Import middlewares
const { uploadImage } = require("../middlewares/uploads/imageUpload");
const goodValidator = require("../middlewares/validators/goodValidator");

// Import controller
const goodController = require("../controllers/goodController");

router
  .route("/")
  .get(goodController.getAll)
  .post(isAdmin, goodValidator.create, uploadImage, goodController.create);

router.get("/search", goodController.search);

router
  .route("/:id")
  .get(goodController.getOne)
  .put(isAdmin, goodValidator.update, uploadImage, goodController.update)
  .delete(isAdmin, goodController.delete);

module.exports = router; // Export router
