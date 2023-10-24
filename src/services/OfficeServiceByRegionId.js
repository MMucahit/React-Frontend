import axios from "axios";

export default class OfficeService {
  getOfficesByRegionId(region_id) {
    return axios.get(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_offices_by_region_id/".concat(
        region_id
      )
    );
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_offices_by_region_id/
// http://127.0.0.1:8000/get_offices_by_region_id/
