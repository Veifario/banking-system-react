const initialState = {
  user: null,
  userDetails: null,
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
    default:
      return state;
  }
};
