const Joi = require("joi");

const { registerSchema } = require("./auth.validatorSchema");

const registerValidator = (req, res, next) => {
	const payload = {
		email: req.body.email,
		name: req.body.name,
		password: req.body.password,
		location: req.body.location,
	};

	const { error } = registerSchema.validate(payload);
	if (error) {
		res.status(406);
		throw new Error(error.details[0].message);
	} else {
		next();
	}
};

module.exports = { registerValidator };
