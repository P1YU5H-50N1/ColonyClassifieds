const jsonwebtoken = require("jsonwebtoken");

const issueJWT = (user) => {
	const _id = user._id;

	const expiresIn = "1d";

	const payload = {
		sub: _id,
		iat: Date.now(),
	};

	const signedToken = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
		expiresIn: expiresIn,
	});

	return {
		token: `Bearer ${signedToken}`,
		expires: expiresIn,
	};
};

module.exports = {issueJWT}