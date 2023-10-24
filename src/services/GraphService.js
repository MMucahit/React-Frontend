import axios from "axios";

export default class GraphService {
  getGraph(id) {
    return axios.get(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/TimeSeries/".concat(id)
    );
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/TimeSeries/
// http://127.0.0.1:8000/TimeSeries/
