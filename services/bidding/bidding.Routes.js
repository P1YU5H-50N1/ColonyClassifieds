const express = require("express");
const router = express.Router();
const {
	postBidValidator,
	getBidsValidator,
	acceptBidValidator,
} = require("./validators/bidding.Validators");
const { acceptBid, allBids, postBid } = require("./bidding.Controllers");

router
	.route("/")
	.post(postBidValidator, postBid)
	.put(acceptBidValidator, acceptBid);
	
router.get("/:classified_id", getBidsValidator, allBids);

module.exports = router;
