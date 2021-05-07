const express = require("express");
const router = express.Router();
const DownloadController = require("../controllers/downloadController");

router.get("/", DownloadController.download);

module.exports = router;
