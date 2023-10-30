import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

// import LoginError from "../pages/ErrorAlert";

import GetToken from "../services/GetToken";

import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const [, setCookie] = useCookies(["Token"]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const saveCookie = async () => {
    let getToken = new GetToken();
    const response = await getToken.get_token(email, password);

    if (!response.data.error) {
      setCookie("Token", response.data, { path: "/" });
    } else {
      setErrors(response.data);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center"></Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              onChange={handleEmail}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              onChange={handlePassword}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            {errors && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {errors.error.map((err, index) => (
                  <p key={index}>{err.error}</p>
                ))}
              </div>
            )}
            <Button
              as={NavLink}
              to="/users"
              onClick={saveCookie}
              color="teal"
              fluid
              size="large"
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
