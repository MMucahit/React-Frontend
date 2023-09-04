import "semantic-ui-css/semantic.min.css";
import { Container } from "react-bootstrap";

import SearcBar from "./pages/SearchBar";

import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";

import styles from "./css/App.css";
import React from "react";

class App extends React.Component {
  state = { searchUser: "", searchOffice: [] };

  findUser = (event) => {
    this.setState({ searchUser: event.target.value });
  };

  handleChange = (event, newValue) => {
    this.setState({ searchOffice: newValue });
  };

  render() {
    const { searchUser, searchOffice } = this.state;

    return (
      <div className={styles}>
        <Navi
          searchOffice={searchOffice}
          searchBar={<SearcBar findUser={this.findUser} />}
        />
        <Container className="main">
          <Dashboard
            searchUser={searchUser}
            searchOffice={searchOffice}
            handleChange={this.handleChange}
          />
        </Container>
      </div>
    );
  }
}

export default App;
