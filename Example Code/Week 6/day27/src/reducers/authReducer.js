import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  AUTH_ERROR,
  AUTH_SIGNOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("isAuthenticated"),
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case AUTH_SIGNOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
