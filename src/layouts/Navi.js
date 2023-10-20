import React from "react";

import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { findUser, findOffices } from "../store/actions/searchActions";

import { NavLink } from "react-router-dom";

import OfficeDetail from "../pages/OfficeDetail";
import SearchBar from "../pages/SearchBar";

import { Container, Menu, Segment, Button } from "semantic-ui-react";

import "../css/Navi.css";

function Navi() {
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies(["Token"]);

  const handleLogout = () => {
    dispatch(findUser(""));
    dispatch(findOffices([]));
    removeCookie("Token", { path: "/" });
  };

  return (
    <Segment inverted className="fixed-segment">
      <Container>
        <Menu inverted secondary>
          <Menu.Item name="Home">
            <Button primary as={NavLink} to="/">
              Home
            </Button>
          </Menu.Item>
          <Menu.Item name="Office Detail">
            <OfficeDetail />
          </Menu.Item>
          <Menu.Item name="Office Shap">
            <Button primary as={NavLink} to="/office-detail">
              Office Shap
            </Button>
          </Menu.Item>
          <Menu.Menu position="right">
            <SearchBar />
            <Button onClick={handleLogout} primary as={NavLink} to="/login">
              Logout
            </Button>
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
}

export default Navi;

// class Navi extends React.Component {
//   updateOfficeShapData = (data) => {
//     this.props.dispatch({
//       type: "OFFİCE_SHAP",
//       payload: data,
//     });
//   };

//   async handleButtonClick(office) {
//     let officeAnalysisServiceWithout = new OfficeAnalysisServiceWithout();
//     const response = await officeAnalysisServiceWithout.getWithoutShap(office);

//     this.updateOfficeShapData(response.data);
//   }

//   render() {
//     let selectedFindOffices = this.props.search.selectedOffices;

//     return (
//       <Segment inverted className="fixed-segment">
//         <Container>
//           <Menu inverted secondary>
//             <Menu.Item name="Home">
//               <Button primary as={NavLink} to="/">
//                 Home
//               </Button>
//             </Menu.Item>
//             <Menu.Item
//               name="Office Detail"
//               onClick={() =>
//                 this.handleButtonClick(
//                   selectedFindOffices.map((office) => office.OfficeName)
//                 )
//               }
//             >
//               <OfficeDetail />
//             </Menu.Item>
//             <Menu.Item name="friends">
//               <Button
//                 primary
//                 as={NavLink}
//                 to="/office-detail"
//                 onClick={() =>
//                   this.handleButtonClick(
//                     selectedFindOffices.map((office) => office.OfficeName)
//                   )
//                 }
//               >
//                 Office Shap
//               </Button>
//             </Menu.Item>
//             <Menu.Menu position="right">
//               <SearchBar />
//             </Menu.Menu>
//           </Menu>
//         </Container>
//       </Segment>
//     );
//   }
// }

// function mapStateToProps(state) {
//   const search = state.search;
//   return {
//     search,
//   };
// }

// export default connect(mapStateToProps)(Navi);
