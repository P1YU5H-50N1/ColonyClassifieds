import axios from "axios";

const PREFIX =
	process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";
export const API_URL = `${PREFIX}/api`;

const getClassifieds = async (token) => {
	const config = {
		headers: {
			Authorization: token,
		},
	};
	const response = await axios.get(API_URL + "/classified", config);
	return [
		...response.data.classifieds,
		...response.data.audience_classifieds,
	];
};
const myClassifieds = async (token) => {
	const config = {
		headers: {
			Authorization: token,
		},
	};
	console.log(config)
	const response = await axios.get(API_URL + "/classified/myClassifieds", config);
	return response.data.classifieds;
};
const classifiedService = { getClassifieds, myClassifieds };

export default classifiedService;
