import axios from "axios";

export const instance = axios.create({
	baseURL: "http://25.45.84.61:3000",
	withCredentials: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"Content-Type": "application/json;charset=UTF-8",
	},
});
