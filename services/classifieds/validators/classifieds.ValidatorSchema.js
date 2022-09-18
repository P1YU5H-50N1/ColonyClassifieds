const Joi = require("joi");

const ClassifiedSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().required(),
	broadcast_radius: Joi.number().required(),
});

module.exports = {
	ClassifiedSchema,
};
