import { API_URL } from "../features/classified/classifiedService";
import axios from "axios";

const publicVapidKey =
	"BDwGbU3qT9Eyh2MozCiiK26ytuf981fSrhQ1nhV8_BCObqevXzCq5h2Pkk3JDPy7DwLCiBJYhIB0rYaT5xhk_NE";

// Register SW, Register Push, Send Push
export async function register(token) {
	// Register Service Worker
	console.log("Registering service worker...");
	const register = await navigator.serviceWorker.register("/service-worker2.js", {
		scope: "/",
	});
    console.log(register)
	console.log("Service Worker Registered...");

	// Register Push
	console.log("Registering Push...");
	const subscription = await register.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
	});
	console.log("Push Registered...");

	// Send Push Notification
	console.log("Sending Push...");
	const body = {
		subscription: subscription,
	};
	const config = {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	};
    console.log("token 401",token)
	try {
		await axios.post(`${API_URL}/notifier`, body, config);
	} catch (err) {
		console.log(err, err.response);
	}
	console.log("Push Sent...");
}

function urlBase64ToUint8Array(base64String) {
	const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding)
		.replace(/\-/g, "+")
		.replace(/_/g, "/");

	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}
