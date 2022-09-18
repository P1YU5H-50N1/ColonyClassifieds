const { ClassifiedSchema } = require("./classifieds.ValidatorSchema");

const ClassifiedValidator = (req, res, next) => {
	const payload = {
		title: req.body.title,
		description: req.body.description,
		broadcast_radius: req.body.broadcast_radius,
	};

	const { error } = ClassifiedSchema.validate(payload);
	if (error) {
		res.status(406);
		throw new Error(error.details[0].message);
	} else {
		next();
	}
};

module.exports = { ClassifiedValidator };
