const express = require("express");
const { generateReport } = require("../controllers/reportController.js");
const router = express.Router();

router.get("/", generateReport);

module.exports = router;
