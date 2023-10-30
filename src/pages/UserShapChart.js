import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";

import UserShapService from "../services/UserShapService";
import UserService from "../services/UserService";

import Plot from "react-plotly.js";

import { Container, Col, Row } from "react-bootstrap";

function UserShapChart() {
  const [shap, setShap] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { employee_id } = useParams();

  useEffect(() => {
    async function fectData() {
      let userShapService = new UserShapService();
      const shap_response = await userShapService.getUserShap(employee_id);

      let userService = new UserService();
      const user_response = await userService.getUser(employee_id);

      setUser(user_response.data);
      setShap(shap_response.data);
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
                  type: "waterfall",
                  x: shap.values,
                  y: shap.feature_names,
                  text: shap.values,
                  connector: {
                    mode: "between",
                    line: { color: "blue" },
                  },
                  orientation: "h",
                },
              ]}
              layout={{
                yaxis: { automargin: true },
                xaxis: { automargin: true },
                width: 800,
                height: 800,
                title: `Ad-Soyad: ${user.name_surname} - Ayrılma Puanı: ${user.active_point}`,
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UserShapChart;
