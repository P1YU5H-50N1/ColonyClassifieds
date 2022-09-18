const Joi = require("joi");

const registerSchema = Joi.object({
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		})
		.required(),

	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.required(),

	name: Joi.string().min(3).max(30).required(),

	location: Joi.object()
		.keys({
			lat: Joi.number(),
			long: Joi.number(),
		})
		.and("lat", "long")
		.required(),
});

const loginSchema = Joi.object({
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		})
		.required(),

	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.required(),
});

module.exports = { registerSchema,loginSchema };
