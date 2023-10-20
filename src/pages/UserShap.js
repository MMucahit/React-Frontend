import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Image, Modal } from "semantic-ui-react";

import "../css/Shap.css";

function UserShap(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const searchUserShap = useSelector((state) => state.search.userShap);

  return (
    <Modal
      className="custom-modal"
      onClose={handleClose}
      onOpen={handleShow}
      open={show}
      trigger={<Button>{props.user.name_surname}</Button>}
    >
      <Modal.Header>{props.user.name_surname}</Modal.Header>
      <Modal.Content image>
        <Image size="big" src={searchUserShap.Base64} wrapped />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default UserShap;
