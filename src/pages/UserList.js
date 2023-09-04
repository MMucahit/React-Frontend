import React from "react";

import ShapService from "../services/ShapService";

import Paginate from "./Paginate";
import Shap from "./Shap";

import { Label, Table, Menu } from "semantic-ui-react";

const itemsPerPage = 25;

class UserList extends React.Component {
  state = {
    image: "",
    currentPage: 1,
  };

  handlePageChange = (event, { activePage }) => {
    this.setState({ currentPage: activePage });
  };

  async handleButtonClick(id) {
    let shapService = new ShapService();
    const response = await shapService.getShap(id);

    this.setState({ image: response.data.image_data });
  }

  render() {
    const { image, currentPage } = this.state;
    const { searchUser, searchOffice, users } = this.props;

    let filteredUser = users.filter((user) => {
      if (searchOffice.length == 0) {
        return (
          user.NameSurname.toLowerCase().indexOf(searchUser.toLowerCase()) !==
          -1
        );
      } else {
        return (
          searchOffice
            .map((office) => office.OfficeName)
            .includes(user.OfficeName) &&
          user.NameSurname.toLowerCase().indexOf(searchUser.toLowerCase()) !==
            -1
        );
      }
    });

    const totalPages = Math.ceil(filteredUser.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleItems = filteredUser.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>EmployeeId</Table.HeaderCell>
            <Table.HeaderCell>Name Surname</Table.HeaderCell>
            <Table.HeaderCell>Office Name</Table.HeaderCell>
            <Table.HeaderCell>Sex</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {visibleItems.map((user, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <Label ribbon>{user.EmployeeId}</Label>
              </Table.Cell>
              <Table.Cell
                onClick={() => this.handleButtonClick(user.EmployeeId)}
              >
                <Shap user={user} image={image} />
              </Table.Cell>
              <Table.Cell>{user.OfficeName}</Table.Cell>
              <Table.Cell>{user.Sex}</Table.Cell>
              <Table.Cell>{user.EmployeeStatusId}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Paginate
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange}
                />
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default UserList;
