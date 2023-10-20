import jwt_decode from "jwt-decode";

export default class decodeToken {
  get_token(token) {
    try {
      const decoded = jwt_decode(token);
      return decoded;
    } catch (error) {
      console.error("Token decode hatası:", error);
      return null;
    }
  }
}
