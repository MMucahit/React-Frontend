import axios from "axios";

export default class LineChartService {
  getLineChart(id) {
    return axios.get(
      "https://deep-agent-ftqcb6wz6q-uc.a.run.app/TimeSeriesData/".concat(id)
    );
  }
}

// https://deep-agent-ftqcb6wz6q-uc.a.run.app/TimeSeriesData/
// http://127.0.0.1:8000/TimeSeriesData/
