const express = require("express");
const router = express.Router();
const transaksiController = require("../controllers/transaksiController");

router.get("/", transaksiController.getAll);

module.exports = router;
