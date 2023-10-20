import React from "react";

import { Route, Routes } from "react-router-dom";

import Categoreis from "./Categories.js";
import UserList from "../pages/UserList.js";
import OfficeShap from "../pages/OfficeShap.js";
import Login from "../pages/Login.js";

import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
            <Categoreis />
          </Col>
          <Col xs={9}>
            <Routes>
              <Route exact path="/" element={<UserList />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/office-detail" element={<OfficeShap />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;

// class Dashboard extends React.Component {
//   render() {
//     return (
//       <div>
//         <Container>
//           <Row>
//             <Col xs={3}>
//               <Categoreis />
//             </Col>
//             <Col xs={9}>
//               <Routes>
//                 <Route exact path="/" element={<UserList />} />
//                 <Route path="/users" element={<UserList />} />
//                 <Route path="/office-detail" element={<OfficeShap />}></Route>
//               </Routes>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Dashboard;
