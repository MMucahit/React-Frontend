import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";

import LineChartService from "../services/LineChartService";
import UserService from "../services/UserService";

import { Container, Col, Row } from "react-bootstrap";

import Plot from "react-plotly.js";

function UserTurnoverChart() {
  const [lineChart, setLineChart] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { employee_id } = useParams();

  useEffect(() => {
    async function fectData() {
      let lineChartService = new LineChartService();
      const line_chart_response = await lineChartService.getLineChart(
        employee_id
      );

      let userService = new UserService();
      const user_response = await userService.getUser(employee_id);

      setUser(user_response.data);
      setLineChart(line_chart_response.data);
      setIsLoading(false);
    }
    fectData();
  }, [employee_id]);

  return (
    <Container>
      <Row>
        <Col xs={2}></Col>
        <Col xs={10}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Plot
              data={[
                {
                  type: "scatter",
                  x: lineChart.map((line) => line.date),
                  y: lineChart.map((line) => line.gain),
                },
              ]}
              layout={{
                yaxis: { automargin: true },
                xaxis: { automargin: true },
                width: 800,
                height: 800,
                title: `Ad-Soyad: ${user.name_surname}`,
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UserTurnoverChart;
