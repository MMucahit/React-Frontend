import axios from "axios";

export default class LineChartService {
  getLineChart(id) {
    return axios.get("http://127.0.0.1:8000/TimeSeriesData/".concat(id));
  }
}
