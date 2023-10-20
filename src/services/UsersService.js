import axios from "axios";

export default class UsersService {
  getUsers() {
    return axios.get("http://127.0.0.1:8000/datas"); // http://127.0.0.1:8000/Users
  }
}
