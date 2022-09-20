self.addEventListener("push", (e) => {
	const data = e.data.json();
	if (data.notifications.length !== 0) {
		data.notifications.map((notification) => {
			self.registration.showNotification("Your Bid has been Accepted", {
				body: `Classified id: ${notification._id}`,
			});
		});
	}
});
