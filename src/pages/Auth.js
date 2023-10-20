import React from "react";

import { useCookies } from "react-cookie";

import Login from "./Login";
import Dashboard from "../layouts/Dashboard";
import Navi from "../layouts/Navi";

import { Container } from "react-bootstrap";

function Auth() {
  const [cookie] = useCookies(["Token"]);

  return (
    <div>
      {cookie.Token ? (
        <div>
          <Navi />
          <Container className="main">
            <Dashboard />
          </Container>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Auth;
