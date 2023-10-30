import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { useCookies } from "react-cookie";

import { useSelector, useDispatch } from "react-redux";
import { getCurrentPage } from "../store/actions/searchActions";

import UsersService from "../services/UsersService";
// import DecodeJwt from "../services/DecodeJwt";

import Paginate from "./Paginate";
import Categoreis from "../layouts/Categories";

import { Label, Table, Menu } from "semantic-ui-react";
import { Container, Row, Col } from "react-bootstrap";

const itemsPerPage = 25;

function UserList() {
  const [users, setUsers] = useState([]);
  // const [cookie] = useCookies(["Token"]);

  const dispatch = useDispatch();

  // const handleDecodeToken = (cookie) => {
  //   let decodeToken = new DecodeJwt();
  //   const decoded_token = decodeToken.get_token(cookie.Token.access_token);
  //   return decoded_token;
  // };

  useEffect(() => {
    async function fectData() {
      // const region = handleDecodeToken(cookie).region_id;

      let usersService = new UsersService();
      await usersService.getUsers().then((result) => setUsers(result.data));
    }
    fectData();
  }, []); // cookie

  const handlePageChange = (event, { activePage }) => {
    dispatch(getCurrentPage(activePage));
  };

  const searchFindOffices = useSelector(
    (state) => state.search.selectedOffices
  );
  const searchFindUser = useSelector((state) => state.search.searchUser);
  const currentPage = useSelector((state) => state.search.currentPage);
  const point = useSelector((state) => state.search.selectedPoint);
  const region = useSelector((state) => state.search.selectedRegion);
  const ciroPoint = useSelector((state) => state.search.selectedCiroPoint);

  const user_filter = (user, find_user) => {
    return (
      user.name_surname.toLowerCase().indexOf(find_user.toLowerCase()) !== -1
    );
  };

  const point_filter = (user, point) => {
    if (point === "None") {
      return user.active_point;
    } else {
      return user.active_point == point;
    }
  };

  const office_filter = (user, find_office) => {
    return find_office
      .map((office) => office.office_name)
      .includes(user.office_name);
  };

  const region_filter = (user, region) => {
    if (region === "None") {
      return user.region_id;
    }
    return user.region_id === region;
  };

  const ciro_point_filter = (user, ciroPoint) => {
    if (ciroPoint === "None") {
      return user.gain_point;
    }
    return user.gain_point === ciroPoint;
  };

  let filteredUser = users.filter((user) => {
    if (searchFindOffices.length === 0) {
      return (
        user_filter(user, searchFindUser) &&
        point_filter(user, point) &&
        region_filter(user, region) &&
        ciro_point_filter(user, ciroPoint)
      );
    } else {
      return (
        office_filter(user, searchFindOffices) &&
        user_filter(user, searchFindUser) &&
        point_filter(user, point) &&
        region_filter(user, region) &&
        ciro_point_filter(user, ciroPoint)
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
    <Container>
      <Row>
        <Col xs={3}>
          <Categoreis />
        </Col>
        <Col xs={9}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Employee Id</Table.HeaderCell>
                <Table.HeaderCell>Adı Soyadı</Table.HeaderCell>
                <Table.HeaderCell>Ofis Adı</Table.HeaderCell>
                <Table.HeaderCell>Cinsiyet</Table.HeaderCell>
                <Table.HeaderCell>Ciro Puanı</Table.HeaderCell>
                <Table.HeaderCell>Aktiflik Puanı</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {visibleItems.map((user, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Label ribbon>{user.employee_id}</Label>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/users/shap/${user.employee_id}`}>
                      {user.name_surname}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{user.office_name}</Table.Cell>
                  <Table.Cell>{user.sex}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/users/turnover/${user.employee_id}`}>
                      {user.gain_point}
                    </Link>
                  </Table.Cell>

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
        </Col>
      </Row>
    </Container>
  );
}

export default UserList;
