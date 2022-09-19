const { postBidSchema,getBidSchema } = require("./bidding.ValidatorSchema");

const postBidValidator = (req, res, next) => {
	const payload = {
		price: req.body.price,
		classified: req.body.classified,
	};
	const { error } = postBidSchema.validate(payload);
	if (error) {
		res.status(406);
		throw new Error(error.details[0].message);
	} else {
		next();
	}
};

const getBidsValidator = (req, res, next) => {
	const payload = {
		classified_id:req.params.classified_id
	}
	const { error } = getBidSchema.validate(payload);
	if (error) {
		res.status(406);
		throw new Error(error.details[0].message);
	} else {
		next();
	}
};
module.exports = { postBidValidator, getBidsValidator };
