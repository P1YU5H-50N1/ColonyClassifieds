const mongoose = require("mongoose");

const AudienceSchema = mongoose.Schema({
    user:{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
    classified:{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Classified",
	}
});

module.exports = mongoose.model("Audience",AudienceSchema)