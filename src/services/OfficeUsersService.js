import axios from "axios";

export default class OfficeUser {
  getOfficeUsers(OfficeName) {
    return axios.get(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_by_offices/".concat(
        OfficeName
      )
    );
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_by_offices/
// http://127.0.0.1:8000/get_by_offices/
