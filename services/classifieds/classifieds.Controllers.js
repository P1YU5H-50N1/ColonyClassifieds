const asyncHandler = require("express-async-handler");
const Classified = require("../../models/classifiedModel");
const Audience = require("../../models/audienceModel");
const User = require("../../models/userModel");

const getClassifieds = asyncHandler(async (req, res) => {
	const classifieds = await Classified.find({ audience: req.user });
	const audience_classifieds = await Audience.find(
		{ user: req.user },
		"classified"
	).populate("classified");
	res.status(200).json({
		message: "get Classifieds",
		classifieds,
		audience_classifieds,
	});
});

const editClassified = asyncHandler((req, res) => {
	res.status(200).json({
		message: "edit Classified",
	});
});

const postClassified = asyncHandler(async (req, res) => {
	const { title, description, broadcast_radius } = req.body;
	const location = req.user.location;

	const geoQuery = {
		location: {
			$near: {
				$geometry: location,
				$maxDistance: broadcast_radius * 1000,
			},
		},
	};

	const audience = await (
		await User.find(geoQuery).limit(50)
	).filter((user) => !user.equals(req.user));

	const more_audience = await User.find(geoQuery).skip(50); //this can be a batch job while scaling

	const classified = await Classified.create({
		title,
		description,
		broadcast_radius,
		audience,
		more_audience: more_audience.length !== 0,
		owner: req.user,
		location,
	});

	if (more_audience.length !== 0) {
		const extended_audience = more_audience.map((user) => ({
			user,
			classified,
		}));
		const audiences = await Audience.insertMany(extended_audience);
		console.log(audiences);
	}

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
