const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import middlewares
const { uploadImage } = require("../middlewares/uploads/imageUpload");
const barangValidator = require("../middlewares/validators/barangValidator");

// Import controller
const barangController = require("../controllers/barangController");

// Get All
router.get("/", barangController.getAll);

// If POST (/barang), will go to imageUpload first
// Then, go to transaksiValidator.create
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
router.post("/", barangValidator.create, uploadImage, barangController.create);

module.exports = router; // Export router
