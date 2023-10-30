import React from "react";

import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import UserSearchBar from "../pages/UserSearchBar";

import { findUser, findOffices } from "../store/actions/searchActions";

import { Container, Menu, Segment, Button } from "semantic-ui-react";

import "../css/Navi.css";

function Navi() {
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies(["Token"]);

  const handleLogout = () => {
    dispatch(findUser(""));
    dispatch(findOffices([]));
    removeCookie("Token", { path: "/" });
  };

  return (
    <Segment inverted className="fixed-segment">
      <Container>
        <Menu inverted secondary>
          <Menu.Item name="Home">
            <Button primary as={NavLink} to="/users">
              Anasayfa
            </Button>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="SearcBar">
              <UserSearchBar />
            </Menu.Item>
            <Menu.Item name="Logout">
              <Button onClick={handleLogout} primary as={NavLink} to="/login">
                Çıkış
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
}

export default Navi;
