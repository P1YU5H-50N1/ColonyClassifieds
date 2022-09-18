const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../services/auth/models/userModel");
const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
	algorithms: ["HS256"],
};

const JWTStrategy = new Strategy(options, function (jwt_payload, done) {
	User.findOne({ _id: jwt_payload.sub }, function (err, user) {
		if (err) {
			return done(err, false);
		}
		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	});
});

module.exports = { JWTStrategy };
