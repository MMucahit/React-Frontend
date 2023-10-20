export const USERS = "USERS";
export const OFFİCE = "OFFİCE";
export const FİND_OFFİCE = "FİND_OFFİCE";
export const FİND_USER = "FİND_USER";
export const USER_SHAP = "USER_SHAP";
export const USER_GRAPH = "USER_GRAPH";
export const USER_LİNE_CHART = "USER_LİNE_CHART";
export const OFFİCE_SHAP = "OFFİCE_SHAP";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const SELECTED_USER = "SELECTED_USER";

export function getUsers(user) {
  return { type: USERS, payload: user };
}

export function getOffices(office) {
  return { type: OFFİCE, payload: office };
}

export function findOffices(office) {
  return { type: FİND_OFFİCE, payload: office };
}

export function findUser(user) {
  return { type: FİND_USER, payload: user };
}

export function getUserShap(user) {
  return { type: USER_SHAP, payload: user };
}

export function getUserGraph(user) {
  return { type: USER_GRAPH, payload: user };
}

export function getOfficeShap(office) {
  return { type: OFFİCE_SHAP, payload: office };
}

export function getUserLineChart(user) {
  return { type: USER_LİNE_CHART, payload: user };
}

export function getCurrentPage(page) {
  return { type: CURRENT_PAGE, payload: page };
}

export function getUser(user) {
  return { type: SELECTED_USER, payload: user };
}
