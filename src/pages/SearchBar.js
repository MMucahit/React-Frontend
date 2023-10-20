import React from "react";

import { useDispatch } from "react-redux";
import { findUser } from "../store/actions/searchActions";

import { Input } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";

function SearchBar() {
  const dispatch = useDispatch();

  const updateSelectedUserData = (event) => {
    dispatch(findUser(event.target.value));
  };

  return (
    <div>
      <Row>
        <Col xs={8}>
          <Input
            id="search user"
            icon="users"
            iconPosition="left"
            placeholder="Search users..."
            onChange={updateSelectedUserData}
          />
        </Col>
        <Col xs={6}></Col>
      </Row>
    </div>
  );
}

export default SearchBar;
