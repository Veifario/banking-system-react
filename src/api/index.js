import axios from "axios";

export const instance = axios.create({
	baseURL: "http://25.45.84.61:3000",
	withCredentials: false,
	headers: {
		"Content-Type": "application/json",
	},
});
