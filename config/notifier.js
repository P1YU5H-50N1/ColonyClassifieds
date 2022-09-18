const webpush = require("web-push");

const setNotifierKeys = () => {
	try {
		webpush.setVapidDetails(
			`mailto:${process.env.VAPID_MAIL}`,
			process.env.PUBLIC_VAPID_KEY,
			process.env.PRIVATE_VAPID_KEY
		);
		if (process.env.MODE === "development") {
			console.log(
				`Vapid Details Configured. EMAIL: ${process.env.VAPID_MAIL}`
			);
		}
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = setNotifierKeys;
