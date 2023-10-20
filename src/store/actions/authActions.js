export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function getLogin(token) {
  return { type: LOGIN, payload: token };
}

export function getLogout() {
  return { type: LOGOUT };
}
