const asyncHandler = require("express-async-handler");
const Bid = require("../../models/bidModel");
const Classified = require("../../models/classifiedModel");

const acceptBid = asyncHandler((req, res) => {
	res.status(200).json({
		message: "Accept Bid for a classified and move to archive",
	});
});
const allBids = asyncHandler(async (req, res) => {
	const { classified_id } = req.params;
	const classified = await Classified.findOne({_id: classified_id})
	if(!classified){
		req.status(400)
		throw new Error("Classified doesn't exist")
	}
	if(!classified.owner._id.equals(req.user._id)){
		res.status(401)
		throw new Error("Unauthorized")
	}
	const bids = await Bid.find({ classified });
	res.status(200).json({
		message: "All Bids for a classified",
		bids: [...bids,...classified.bids]
	});
});

const postBid = asyncHandler(async (req, res) => {
	const { price } = req.body;
	const { user } = req;
	const classified = await Classified.findOne({ _id: req.body.classified });

	if (!classified) {
		throw new Error("Classified doesn't exists");
	}

	const bid = await Bid.create({ classified, user, price });

	if (!bid) {
		throw new Error("Invalid params");
	}

	res.status(200).json({
		message: "post Bid",
		bid,
	});
});

module.exports = {
	acceptBid,
	allBids,
	postBid,
};
