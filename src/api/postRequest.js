import { instance } from "./";

export const loginUser = async (user) => {
	const { data } = await instance.post("/login", user);
	return data;
};

export const registerUser = async (user) => {
	const { data } = await instance.post("/register", user);
	return data;
};
