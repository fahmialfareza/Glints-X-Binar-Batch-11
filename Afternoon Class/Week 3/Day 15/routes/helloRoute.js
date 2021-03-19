const express = require("express");
const router = express.Router();
const HelloController = require("../controllers/HelloController");

router.get("/", HelloController.get);
router.post("/", HelloController.post);
router.put("/", HelloController.put);
router.delete("/", HelloController.delete);

module.exports = router;
