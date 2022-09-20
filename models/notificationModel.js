const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
    classified:{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "ArchivedClassified",
	},
    user:{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
    message: {
        type: String,
		required: [true, "Please add a message"],
    },
    seen: {
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model("Notification", NotificationSchema);
