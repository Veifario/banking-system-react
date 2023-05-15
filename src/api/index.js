import axios from "axios";

export const instance = axios.create({
	baseURL: "http://192.168.0.104:3000",
	withCredentials: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"Content-Type": "application/json;charset=UTF-8",
	},
});
