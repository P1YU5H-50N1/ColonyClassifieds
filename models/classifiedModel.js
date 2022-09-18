const mongoose = require("mongoose");
const pointSchema = require("./pointModel");

const ClassifiedSchema = mongoose.Schema({
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
	location: {
		type: pointSchema,
		required: [true, "Add a location"],
	},
	broadcast_radius: {
		type: Number,
		required: [true, "Please add a broadcast radius"],
	},
	bids: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			// ref: "Bid",
		},
	],
	more_bids: {
		type: Boolean,
		default: false,
	},
	audience: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	],
	more_audience: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Classified", ClassifiedSchema);
