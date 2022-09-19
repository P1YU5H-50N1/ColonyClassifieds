const mongoose = require("mongoose");
const pointSchema = require("./pointModel");

const ArchivedClassifiedSchema = mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	title: {
		type: String,
		required: [true, "Please add a title"],
	},
	description: {
		type: String,
		required: [true, "Please add a description"],
	},
	broadcast_radius: {
		type: Number,
		required: [true, "Please add a broadcast radius"],
	},
	acceptedBid: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Bid",
	},
	bids: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Bid",
		},
	],
	more_bids: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("ArchivedClassified", ArchivedClassifiedSchema);
