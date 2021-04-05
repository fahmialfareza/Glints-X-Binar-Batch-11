const express = require("express");

// Import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Make router
const router = express.Router();

// Get all transaksi data
router.get("/", transaksiController.getAll);

// Get one transaksi
router.get("/:id", transaksiValidator.getOne, transaksiController.getOne);

// Create transaksi
router.post("/", transaksiValidator.create, transaksiController.create);

// Update transaksi
router.put("/:id", transaksiValidator.update, transaksiController.update);

// Delete transaksi
router.delete("/:id", transaksiValidator.delete, transaksiController.delete);

module.exports = router;
