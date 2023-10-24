import axios from "axios";

export default class OfficeShapService {
  getOfficeShap(OfficeName) {
    return axios.get(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/OfficeShap/".concat(
        OfficeName
      )
    );
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/OfficeShap/
// http://127.0.0.1:8000/OfficeShap/
