import { instance } from "./";

export const getUserDetails = async (id) => {
	const { data } = await instance.get(`/user/get_info?user_id=${id}`);
	return data;
};
