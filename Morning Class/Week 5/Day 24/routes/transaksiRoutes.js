const express = require("express");

// Import validator

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Make router
const router = express.Router();

// Get all transaksi data
router.get("/", transaksiController.getAll);

module.exports = router;
