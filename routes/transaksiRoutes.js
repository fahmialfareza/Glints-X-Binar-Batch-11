const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Import auth (middleware)
const auth = require("../middlewares/auth");

// If GET (/transaksi), will go to getAll function in transaksiController class
router.get("/", auth.adminOrUser, transaksiController.getAll);

// If GET (/transaksi/:id), will go to getOne function in transaksiController
router.get("/:id", transaksiController.getOne);

// If POST (/transaksi), will go to transaksiValidator.create first
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
router.post("/", transaksiValidator.create, transaksiController.create);

// If POST (/transaksi), will go to transaksiValidator.create first
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
router.put("/:id", transaksiValidator.update, transaksiController.update);

// If DELETE (/transaksi/:id), will go to transaksiController.delete
router.delete("/:id", transaksiController.delete);

module.exports = router; // Export router
