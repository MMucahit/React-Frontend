import React from "react";

import { Route, Routes } from "react-router-dom";

import UserList from "../pages/UserList.js";
import UserShapChart from "../pages/UserShapChart.js";
import UserTurnoverChart from "../pages/UserTurnoverChart.js";
import Login from "../pages/Login.js";

import { Container } from "react-bootstrap";

function Dashboard() {
  return (
    <div>
      <Container>
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/users" element={<UserList />} />
          <Route path="/users/shap/:employee_id" element={<UserShapChart />} />
          <Route
            path="/users/turnover/:employee_id"
            element={<UserTurnoverChart />}
          />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default Dashboard;
