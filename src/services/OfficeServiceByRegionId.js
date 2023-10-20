import axios from "axios";

export default class OfficeService {
  getOfficesByRegionId(region_id) {
    return axios.get(
      "http://127.0.0.1:8000/get_offices_by_region_id/".concat(region_id)
    );
  }
}
