const express = require("express"); // Import express
const router = express.Router(); // Make router
// Import helloController
const HelloController = require("../controllers/helloController");

router.get("/", HelloController.get);
router.post("/", HelloController.post);
router.put("/", HelloController.put);
router.delete("/", HelloController.delete);

// Export router so index.js can access the router
module.exports = router;
