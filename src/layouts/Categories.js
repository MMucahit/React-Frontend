import React from "react";

import { Menu } from "semantic-ui-react";

class Categoreis extends React.Component {
  render() {
    return (
      <Menu pointing vertical>
        {this.props.fixedTags}
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    );
  }
}

export default Categoreis;
