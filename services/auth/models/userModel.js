const mongoose = require("mongoose");
const pointSchema = require("./pointModel");

const UserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
		},
		email: {
			type: String,
			required: [true, "Please add an email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please add a password"],
		},
		location: {
			type: pointSchema,
			required: [true, "Add a location"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", UserSchema);
