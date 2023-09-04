import React from "react";

import UserService from "../services/UserService";

import Categoreis from "./Categories.js";
import UserList from "../pages/UserList.js";
import FixedTags from "../pages/FixedTags";

import { Container, Row, Col } from "react-bootstrap";

class Dashboard extends React.Component {
  state = { users: [] };

  async componentDidMount() {
    let userService = new UserService();
    const response = await userService.getUsers();

    this.setState({ users: response.data });
  }

  // handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   this.setState({
  //     searchOffice: typeof value === "string" ? value.split(",") : value,
  //   });
  // };

  render() {
    const { updateData, searchUser, searchOffice, handleChange } = this.props;
    const { users } = this.state;

    return (
      <div>
        <Container>
          <Row>
            <Col xs={3}>
              <Categoreis
                fixedTags={
                  <FixedTags
                    handleChange={handleChange}
                    searchOffice={searchOffice}
                  />
                }
              />
              {/* <FixedTags
                handleChange={this.handleChange}
                searchOffice={searchOffice}
              /> */}
            </Col>
            <Col xs={9}>
              <UserList
                users={users}
                updateData={updateData}
                searchUser={searchUser}
                searchOffice={searchOffice}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
