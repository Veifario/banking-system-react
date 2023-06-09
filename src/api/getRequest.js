import { instance } from "./";

export const getUserDetails = async (id) => {
	const { data } = await instance.get(`/user/get_info?user_id=${id}`);
	return data;
};

export const getUserCredits = async (id) => {
	const { data } = await instance.get(`/user/get_credits?user_id=${id}`);
	return data;
};

export const getRepayment = async (userId, creditId) => {
	const { data } = await instance.get(
		`/user/get_repayment_schedule?user_id=${userId}&credit_id=${creditId}`
	);
	return data;
};
