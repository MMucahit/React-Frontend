import axios from "axios";

export default class UserService {
  getUser(id) {
    return axios.get(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_by_employee_id/".concat(
        id
      )
    );
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_by_employee_id/
// http://127.0.0.1:8000/get_by_employee_id/
