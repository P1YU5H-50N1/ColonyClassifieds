const express = require("express");
const router = express.Router();
const { notifyBidder } = require("./notifier.Controllers");

router.post("/", notifyBidder);

module.exports = router;
