import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Modal, Card } from "semantic-ui-react";

function OfficeDetail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchFindOffices = useSelector(
    (state) => state.search.selectedOffices
  );
  const searchOfficeShap = useSelector((state) => state.search.officeShap);

  return (
    <Modal
      className="custom-modal-detail"
      onClose={handleClose}
      onOpen={handleShow}
      open={show}
      trigger={<Button>OfficeDetail</Button>}
    >
      <Modal.Header>
        {searchFindOffices.map((office) => office.office_name)}
      </Modal.Header>
      <Modal.Content>
        <Card.Group>
          {searchOfficeShap.map((office, index) => (
            <Card key={index}>
              <Card.Content>
                <Card.Header>{office.name_surname}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Aktive %: {office.active_proba.toFixed(2)}
                  </Button>
                  <Button basic color="red">
                    Deaktive %: {office.deactive_proba.toFixed(2)}
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default OfficeDetail;
