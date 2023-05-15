import { instance } from "./";

export const loginUser = async (user) => {
	const { data } = await instance.post("/login", user);
	return data;
};
