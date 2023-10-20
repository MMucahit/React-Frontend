import { LOGIN, LOGOUT } from "../actions/authActions";

import { loginToken, logoutToken } from "../initialValues/initials";

const initialState = {
  loginToken: loginToken,
  logoutToken: logoutToken,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        loginToken: payload, //[...state.SearchOffice, payload],
      };
    case LOGOUT:
      return {
        ...state,
        logoutToken: payload,
      };
    default:
      return state;
  }
}
