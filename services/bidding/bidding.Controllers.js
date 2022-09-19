const asyncHandler = require("express-async-handler");
const Bid = require("../../models/bidModel");
const ArchivedClassified = require("../../models/archivedClassifiedModel");
const Classified = require("../../models/classifiedModel");

const acceptBid = asyncHandler(async (req, res) => {
	const { classified_id, bid_id } = req.body;

	const classified = await Classified.findById(classified_id);

	if (!classified) {
		throw new Error("Classified doesn't exist");
	}

	const bid = await Bid.findOne({
		classified: classified._id,
		bid: bid_id,
	});

	if (!bid) {
		res.status(401);
		throw new Error("Bid doesn't exist");
	}
	const del_classified = await Classified.findByIdAndDelete(classified_id);
	console.log(del_classified)
	const {
		_id,
		owner,
		title,
		description,
		broadcast_radius,
		bids,
		more_bids,
	} = del_classified;
	const archived = await ArchivedClassified.create({
		_id,
		owner,
		title,
		description,
		broadcast_radius,
		bids,
		more_bids,
		acceptedBid: bid,
	});
	res.status(200).json({
		message: "Accept Bid for a classified and move to archive",
		del_classified,
		archived
	});
});
const allBids = asyncHandler(async (req, res) => {
	const { classified_id } = req.params;
	const classified = await Classified.findOne({ _id: classified_id });
	if (!classified) {
		res.status(400);
		throw new Error("Classified doesn't exist");
	}
	if (!classified.owner._id.equals(req.user._id)) {
		res.status(401);
		throw new Error("Unauthorized");
	}
	const bids = await Bid.find({ classified });
	res.status(200).json({
		message: "All Bids for a classified",
		bids: [...bids, ...classified.bids],
	});
});

const postBid = asyncHandler(async (req, res) => {
	const { price } = req.body;
	const { user } = req;
	const classified = await Classified.findOne({ _id: req.body.classified });

	if (!classified) {
		throw new Error("Classified doesn't exists");
	}
	if (classified.owner._id.equals(req.user._id)) {
		res.status(400);
		throw new Error("You can't submit bid for your own classified");
	}
	const bid = await Bid.create({ classified, user, price });
	if (!bid) {
		res.status(400);
		throw new Error("Invalid params");
	}

	if (classified.bids.length < 50) {
		classified.bids.push(bid._id);
		const saved_classified = await classified.save();
		res.status(201).json({
			message: "post Bid",
			bid: saved_classified.bids,
		});
	}

	res.status(201).json({
		message: "post Bid",
		bid,
	});
});

module.exports = {
	acceptBid,
	allBids,
	postBid,
};
