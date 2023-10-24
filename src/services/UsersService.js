import axios from "axios";

export default class UsersService {
  getUsers() {
    return axios.get("https://deep-agent-ftqcb6wz6q-uc.a.run.app/datas");
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/datas
// http://127.0.0.1:8000/datas
