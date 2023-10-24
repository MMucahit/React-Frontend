import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { useSelector, useDispatch } from "react-redux";
import {
  getUserShap,
  getUserLineChart,
  getCurrentPage,
} from "../store/actions/searchActions";

// import UsersService from "../services/UsersService";

import UserShapServiceByRegionId from "../services/UsersServiceByRegionId";
import UserShapService from "../services/UserShapService";
import LineChartService from "../services/LineChartService";
import DecodeJwt from "../services/DecodeJwt";

import Paginate from "./Paginate";
import UserShap from "./UserShap";
import LineCharts from "./LineCharts";

import { Label, Table, Menu } from "semantic-ui-react";

const itemsPerPage = 25;

function UserList() {
  const [users, setUsers] = useState([]);
  const [cookie] = useCookies(["Token"]);

  const dispatch = useDispatch();

  const handleDecodeToken = (cookie) => {
    let decodeToken = new DecodeJwt();
    const decoded_token = decodeToken.get_token(cookie.Token.access_token);
    return decoded_token;
  };

  useEffect(() => {
    async function fectData() {
      const region = handleDecodeToken(cookie).region_id;

      let userShapServiceByRegionId = new UserShapServiceByRegionId();
      await userShapServiceByRegionId
        .getUsersByRegionId(region)
        .then((result) => setUsers(result.data));

      // let usersService = new UsersService();
      // await usersService.getUsers().then((result) => setUsers(result.data));
    }
    fectData();
  }, [cookie]);

  const handlePageChange = (event, { activePage }) => {
    dispatch(getCurrentPage(activePage));
  };

  const updateUserShap = async (id) => {
    let userShapService = new UserShapService();
    const response = await userShapService.getUserShap(id);

    dispatch(getUserShap(response.data));
  };

  const updateUserLineChart = async (id) => {
    let lineChartService = new LineChartService();
    const response = await lineChartService.getLineChart(id);

    dispatch(getUserLineChart(response.data));
  };

  const searchFindOffices = useSelector(
    (state) => state.search.selectedOffices
  );

  console.log(searchFindOffices);
  const searchFindUser = useSelector((state) => state.search.searchUser);
  const currentPage = useSelector((state) => state.search.currentPage);

  let filteredUser = users.filter((user) => {
    if (searchFindOffices.length === 0) {
      return (
        user.name_surname
          .toLowerCase()
          .indexOf(searchFindUser.toLowerCase()) !== -1 &&
        user.employee_status_id === "Active"
      );
    } else {
      return (
        searchFindOffices
          .map((office) => office.office_name)
          .includes(user.office_name) &&
        user.name_surname
          .toLowerCase()
          .indexOf(searchFindUser.toLowerCase()) !== -1
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
          <Table.HeaderCell>Active Point</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {visibleItems.map((user, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Label ribbon>{user.employee_id}</Label>
            </Table.Cell>
            <Table.Cell onClick={() => updateUserShap(user.employee_id)}>
              <UserShap user={user} />
            </Table.Cell>
            <Table.Cell>{user.office_name}</Table.Cell>
            <Table.Cell>{user.sex}</Table.Cell>
            {user.employee_status_id === "Active" ? (
              <Table.Cell
                onClick={() => updateUserLineChart(user.employee_id)}
                positive
              >
                <LineCharts user={user} />
              </Table.Cell>
            ) : (
              <Table.Cell
                onClick={() => updateUserLineChart(user.employee_id)}
                negative
              >
                <LineCharts user={user} />
              </Table.Cell>
            )}
            <Table.Cell>{user.active_point}</Table.Cell>
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
                onPageChange={handlePageChange}
              />
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export default UserList;
