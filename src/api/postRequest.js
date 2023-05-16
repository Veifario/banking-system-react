import { instance } from "./";

export const loginUser = async (user) => {
	const { data } = await instance.post("/login", user);
	return data;
};

export const registerUser = async (user) => {
	const { data } = await instance.post("/register", user);
	return data;
};

export const updateUser = async (user) => {
	const { data } = await instance.post("/user/update_info", user);
	return data;
};

export const takeCredit = async (credit) => {
	const { data } = await instance.post("/user/take_credit", credit);
	return data;
};

export const payCredit = async (credit) => {
	const { data } = await instance.post("/user/pay_credit", credit);
	return data;
};

export const investBank = async (amount) => {
	const { data } = await instance.post("/user/invest", amount);
	return data;
};
