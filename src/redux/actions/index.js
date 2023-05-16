export const userLogged = (user) => ({ type: "USER", payload: user });
export const userDetailsAdd = (data) => ({
	type: "USER_DETAILS",
	payload: data,
});
export const userBalanceUpdate = (balance) => ({
	type: "USER_BALANCE",
	payload: balance,
});
