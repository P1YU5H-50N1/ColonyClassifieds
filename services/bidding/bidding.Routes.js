const express = require("express");
const router = express.Router();
const { postBidValidator } = require("./validators/bidding.Validators");
const { acceptBid, allBids, postBid } = require("./bidding.Controllers");

router.route("/").get(allBids).post(postBidValidator, postBid).put(acceptBid);

module.exports = router;
