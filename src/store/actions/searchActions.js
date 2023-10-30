export const OFFİCE = "OFFİCE";
export const FİND_OFFİCE = "FİND_OFFİCE";
export const FİND_USER = "FİND_USER";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const FİND_POİNT = "FİND_POİNT";
export const FİND_REGİON = "FİND_REGİON";
export const FİND_CİRO_POİNT = "FİND_CİRO_POİNT";

export function getOffices(office) {
  return { type: OFFİCE, payload: office };
}

export function findOffices(office) {
  return { type: FİND_OFFİCE, payload: office };
}

export function findUser(user) {
  return { type: FİND_USER, payload: user };
}

export function getCurrentPage(page) {
  return { type: CURRENT_PAGE, payload: page };
}

export function findPoint(point) {
  return { type: FİND_POİNT, payload: point };
}

export function findRegion(point) {
  return { type: FİND_REGİON, payload: point };
}

export function findCiroPoint(point) {
  return { type: FİND_CİRO_POİNT, payload: point };
}
