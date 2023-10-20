import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserShap } from "../store/actions/searchActions";

import UserShap from "./UserShap";

import UserShapService from "../services/UserShapService";

import { Button, Card } from "semantic-ui-react";

function OfficeShap() {
  const dispatch = useDispatch();

  const handleButtonClick = async (id) => {
    let userShapService = new UserShapService();
    const response = await userShapService.getUserShap(id);

    dispatch(getUserShap(response.data));
  };

  const searchOfficeShap = useSelector((state) => state.search.officeShap);
  const searchFindUser = useSelector((state) => state.search.searchUser);

  let filteredUser = searchOfficeShap.filter((user) => {
    return (
      user.name_surname.toLowerCase().includes(searchFindUser.toLowerCase()) &&
      user.employee_status_id === "Active" &&
      user.predictions === "Deactive"
    );
  });

  return (
    <Card.Group>
      {filteredUser.map((office, index) => (
        <Card key={index}>
          <Card.Content>
            <Card.Header onClick={() => handleButtonClick(office.employee_id)}>
              <UserShap user={office} />
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Active %: {office.active_proba.toFixed(2)}
              </Button>
              <Button basic color="red">
                Deactive %: {office.deactive_proba.toFixed(2)}
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

export default OfficeShap;
