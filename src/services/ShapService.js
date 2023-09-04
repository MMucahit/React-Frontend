import axios from "axios";

export default class ShapService {
  getShap(id) {
    return axios.get("http://127.0.0.1:8000/GD/".concat(id));
  }
}
