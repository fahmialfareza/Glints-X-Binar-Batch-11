const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import middlewares
// const { uploadImage } = require("../middlewares/uploads/imageUpload");
// const goodValidator = require("../middlewares/validators/goodValidator");

// Import controller
const goodController = require("../controllers/goodController");

// Get All
router.get("/", goodController.getAll);

// If POST (/good), will go to imageUpload first
// Then, go to transaksiValidator.create
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
// router.post("/", goodValidator.create, uploadImage, goodController.create);

module.exports = router; // Export router
