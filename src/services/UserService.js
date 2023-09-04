import axios from "axios";

export default class UserService {
  getUsers() {
    return axios.get("http://127.0.0.1:8000/GD");
  }
}
