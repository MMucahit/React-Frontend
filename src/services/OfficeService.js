import axios from "axios";

export default class OfficeService {
  getOffices() {
    return axios.get("http://127.0.0.1:8000/Office");
  }
}