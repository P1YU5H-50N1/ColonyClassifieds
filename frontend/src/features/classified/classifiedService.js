import axios from "axios";

const PREFIX =
	process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";
const API_URL = `${PREFIX}/api/classified`;

const getClassifieds = async (token) => {
	const config = {
		headers: {
			Authorization: token,
		},
	};
	const response = await axios.get(API_URL, config);
	return [...response.data.classifieds,...response.data.audience_classifieds];
};
const classifiedService = { getClassifieds };

export default classifiedService;
