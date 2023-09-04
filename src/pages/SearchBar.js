import React from "react";

import { Input } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";

class SearchBar extends React.Component {
  render() {
    const { findUser } = this.props;

    return (
      <div>
        <Row>
          <Col xs={8}>
            <Input
              id="search user"
              icon="users"
              iconPosition="left"
              placeholder="Search users..."
              onChange={findUser}
            />
          </Col>
          <Col xs={6}></Col>
        </Row>
      </div>
    );
  }
}

export default SearchBar;
