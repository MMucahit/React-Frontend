import axios from "axios";

export default class UserService {
  getUser(id) {
    return axios.get("http://127.0.0.1:8000/get_by_employee_id/".concat(id)); // http://127.0.0.1:8000/User/
  }
}
