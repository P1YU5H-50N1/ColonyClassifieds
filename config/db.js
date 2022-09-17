const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		if (process.env.MODE === "development") {
			console.log(`MonogoDB Connected: ${conn.connection.host}`);
		}
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
