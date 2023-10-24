import axios from "axios";

export default class GetToken {
  get_token(username, password) {
    const response = axios.post(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/login",
      {
        username: username,
        password: password,
      }
    );
    return response;
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/login
// http://localhost:8000/login
