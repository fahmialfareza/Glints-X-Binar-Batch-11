const express = require("express");
const router = express.Router();
const transaksiController = require("../controllers/transaksiController");

// If user go to http://localhost:3000/transaksi (GET)
router.get("/", transaksiController.getAll);

module.exports = router;
