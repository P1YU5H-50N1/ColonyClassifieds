const Joi = require("joi");

const postBidSchema = Joi.object({
	price: Joi.number().min(1).required(),
    classified: Joi.string().hex().length(24).required()
});

module.exports = { postBidSchema };
