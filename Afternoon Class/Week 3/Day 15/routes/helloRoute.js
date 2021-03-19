const express = require("express"); // Import express
const router = express.Router(); // Make a router
const HelloController = require("../controllers/HelloController"); // Import HelloController

// If user go to http://localhost:3000 (GET)
router.get("/", HelloController.get);

// If user go to http://localhost:3000 (POST)
router.post("/", HelloController.post);

// If user go to http://localhost:3000 (PUT)
router.put("/", HelloController.put);

// If user go to http://localhost:3000 (DELETE)
router.delete("/", HelloController.delete);

module.exports = router; // Export router
