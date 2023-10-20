import axios from "axios";

export default class GetToken {
  get_token(email, password) {
    const response = axios.post("http://127.0.0.1:8000/login", {
      email: email,
      password: password,
    });
    return response;
  }
}
