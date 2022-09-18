const asyncHandler = require("express-async-handler");
const Classified = require("../../models/classifiedModel");

const getClassifieds = asyncHandler((req, res) => {
	res.status(200).json({
		message: "get Classifieds",
	});
});

const editClassified = asyncHandler((req, res) => {
	res.status(200).json({
		message: "edit Classified",
	});
});

const postClassified = asyncHandler(async (req, res) => {
	const { title, description, broadcast_radius } = req.body;
	const  location  = req.body.location || req.user.location;
	const classified = await Classified.create({
		title,
		description,
		broadcast_radius,
		owner: req.user,
		location,
	});

	res.status(200).json({
		message: "post Classified",
		ad: classified,
	});
});

module.exports = {
	getClassifieds,
	postClassified,
	editClassified,
};
