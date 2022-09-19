const mongoose = require("mongoose");

const BidSchema = mongoose.Schema({
    classified:{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Classified",
	},
    user:{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
    price: {
        type: Number,
		required: [true, "Please add a bid price"],
    }
})

module.exports = mongoose.model("Bid", BidSchema);
