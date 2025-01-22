const express = require("express");
const { getTradingPairs } = require("../controllers/dexController");
const router = express.Router();

router.route("/pairs").get(getTradingPairs);

module.exports = router; 