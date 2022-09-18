const asyncHandler = require("express-async-handler");
const webpush = require("web-push");

const notifyBidder = asyncHandler((req, res) => {
	res.status(200).json({
		message: "Notify Bidder that his bid is accepted",
	});
});

module.exports = {
	notifyBidder,
};
