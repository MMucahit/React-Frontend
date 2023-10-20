import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Image, Modal } from "semantic-ui-react";

import "../css/Shap.css";

function UserGraph(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchUserGraph = useSelector((state) => state.search.userGraph);

  return (
    <Modal
      className="custom-modal"
      onClose={handleClose}
      onOpen={handleShow}
      open={show}
      trigger={<Button>{props.user.EmployeeStatusId}</Button>}
    >
      <Modal.Header>{props.user.NameSurname}</Modal.Header>
      <Modal.Content image>
        <Image size="big" src={searchUserGraph.Base64} wrapped />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default UserGraph;
