import axios from "axios";

export default class UsersServiceByRegionId {
  getUsersByRegionId(region_id) {
    return axios.get(
      "http://127.0.0.1:8000/get_by_region_id/".concat(region_id)
    );
  }
}
