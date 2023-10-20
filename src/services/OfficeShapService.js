import axios from "axios";

export default class OfficeShapService {
  getOfficeShap(OfficeName) {
    return axios.get("http://127.0.0.1:8000/OfficeShap/".concat(OfficeName));
  }
}
