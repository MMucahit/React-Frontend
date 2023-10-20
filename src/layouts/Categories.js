import React from "react";

import FixedTags from "../pages/FixedTags";

import { Menu } from "semantic-ui-react";

function Categories() {
  return (
    <Menu pointing vertical>
      <FixedTags />
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
    </Menu>
  );
}

export default Categories;

// class Categoreis extends React.Component {
//   render() {
//     return (
//       <Menu pointing vertical>
//         <FixedTags />
//         <Menu.Item name="home" />
//         <Menu.Item name="messages" />
//         <Menu.Item name="friends" />
//       </Menu>
//     );
//   }
// }

// export default Categoreis;
