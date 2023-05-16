const initialState = {
	user: null,
	userDetails: null,
	userBalance: 0,
};

export const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case "USER":
			return {
				...state,
				user: payload,
			};
		case "USER_DETAILS":
			return {
				...state,
				userDetails: payload,
			};
		case "USER_BALANCE":
			return {
				...state,
				userBalance: payload,
			};
		default:
			return state;
	}
};
