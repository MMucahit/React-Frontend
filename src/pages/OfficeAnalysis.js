import React from "react";

import { Button, Image, Modal, Header } from "semantic-ui-react";
import "../css/Shap.css";

class OfficeAnalysis extends React.Component {
  state = {
    show: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    const { show } = this.state;
    const { searchOffice } = this.props;

    return (
      <Modal
        className="custom-modal"
        onClose={this.handleClose}
        onOpen={this.handleShow}
        open={show}
        trigger={<Button>OfficeAnalysis</Button>}
      >
        <Modal.Header>
          {searchOffice.map((office) => office.OfficeName)}
        </Modal.Header>
        <Modal.Content image>
          <Image
            size="big"
            src="https://w7.pngwing.com/pngs/27/352/png-transparent-remax-balloon-and-logo.png"
            wrapped
          />
          <Modal.Description>
            <Header>
              {searchOffice.map((office) => office.OfficeName)} Analysis
            </Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
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

export default OfficeAnalysis;
