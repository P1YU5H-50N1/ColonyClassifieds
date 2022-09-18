const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("./models/userModel");

//@desc Register User
//@route POST /api/auth/register
//@access public
const register = asyncHandler(async (req, res) => {

	const { name, email, password, location } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
		location : {
			type:"Point",
			coordinates: [location.long,location.lat]
		}
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

//@desc Login User
//@route POST /api/auth/login
//@access public
const login = asyncHandler((req, res) => {
	res.status(200).json({
		message: "login",
	});
});

module.exports = {
	register,
	login,
};
