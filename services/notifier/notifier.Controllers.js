const asyncHandler = require("express-async-handler");
const Notification = require("../../models/notificationModel");
const webpush = require("web-push");

const notifyBidder = asyncHandler(async (req, res) => {
	const { subscription } = req.body;
	if (!subscription) {
		res.status(401);
		throw new Error("web push subscription required");
	}
	const notifications = await Notification.find({ user: req.user }).limit(10);
	const payload = JSON.stringify({
		notifications,
	});
	await Notification.deleteMany({ user: req.user });

	await webpush.sendNotification(subscription, payload);

	res.status(201).json({});
});

module.exports = {
	notifyBidder,
};
