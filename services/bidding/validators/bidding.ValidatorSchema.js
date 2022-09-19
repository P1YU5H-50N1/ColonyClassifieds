const Joi = require("joi");

const postBidSchema = Joi.object({
	price: Joi.number().min(1).required(),
    classified: Joi.string().hex().length(24).required()
});
const getBidSchema = Joi.object({
    classified_id: Joi.string().hex().length(24).required()
})

module.exports = { postBidSchema,getBidSchema };
