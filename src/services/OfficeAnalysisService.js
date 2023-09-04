import axios from "axios";

export default class ShapService {
  getShaps(OfficeName) {
    return axios.get("http://127.0.0.1:8000/GDs/".concat(OfficeName));
  }
}
