import axios from "axios";

export default class OfficeUser {
  getOfficeUsers(OfficeName) {
    return axios.get(
      "http://127.0.0.1:8000/get_by_offices/".concat(OfficeName)
    ); // http://127.0.0.1:8000/OfficeUsers
  }
}
