import React from "react";

import { Button, Image, Modal } from "semantic-ui-react";

import "../css/Shap.css";

class Shap extends React.Component {
  state = {
    show: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    const { show } = this.state;
    const { user } = this.props;

    return (
      <Modal
        className="custom-modal"
        onClose={this.handleClose}
        onOpen={this.handleShow}
        open={show}
        trigger={<Button>{user.NameSurname}</Button>}
      >
        <Modal.Header>{user.NameSurname}</Modal.Header>
        <Modal.Content image>
          <Image size="big" src={this.props.image} wrapped />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} positive>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Shap;
