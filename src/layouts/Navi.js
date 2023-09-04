import React from "react";

import OfficeAnalysis from "../pages/OfficeAnalysis";
import OfficeDetail from "../pages/OfficeDetail";

import OfficeAnalysisService from "../services/OfficeAnalysisService";

import { Container, Menu, Segment } from "semantic-ui-react";

import "../css/Navi.css";

class Navi extends React.Component {
  state = { OfficeShap: [] };

  async handleButtonClick(office) {
    let officeAnalysisService = new OfficeAnalysisService();
    const response = await officeAnalysisService.getShaps(office);

    this.setState({ OfficeShap: response.data });
  }

  render() {
    const { OfficeShap } = this.state;
    const { searchOffice, searchBar } = this.props;

    return (
      <Segment inverted className="fixed-segment">
        <Container>
          <Menu inverted secondary>
            <Menu.Item
              name="Office Analysis"
              onClick={() =>
                this.handleButtonClick(
                  searchOffice.map((office) => office.OfficeName)
                )
              }
            >
              <OfficeAnalysis
                searchOffice={searchOffice}
                OfficeShap={OfficeShap}
              />
            </Menu.Item>
            <Menu.Item name="Office Detail" />
            <Menu.Item name="friends" />
            <Menu.Menu position="right">{searchBar}</Menu.Menu>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navi;
