import axios from "axios";

export default class UserShapService {
  getUserShap(id) {
    return axios.get(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_user_shap/".concat(id)
    );
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/get_user_shap/
// http://127.0.0.1:8000/get_user_shap/
