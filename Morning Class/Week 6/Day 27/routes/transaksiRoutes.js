const express = require("express");

// Import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Import auth (middleware)
const auth = require("../middlewares/auth");

// Make router
const router = express.Router();

// Get all transaksi data
router.get("/", auth.user, transaksiController.getAll);

// Get one transaksi
router.get(
  "/:id",
  auth.user,
  transaksiValidator.getOne,
  transaksiController.getOne
);

// Create transaksi
router.post(
  "/",
  auth.admin,
  transaksiValidator.create,
  transaksiController.create
);

// Update transaksi
router.put(
  "/:id",
  auth.admin,
  transaksiValidator.update,
  transaksiController.update
);

// Delete transaksi
router.delete(
  "/:id",
  auth.admin,
  transaksiValidator.delete,
  transaksiController.delete
);

module.exports = router;
