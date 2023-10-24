import axios from "axios";

export default class OfficeService {
  getOffices() {
    return axios.get("https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_offices");
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_offices
// http://127.0.0.1:8000/get_offices
