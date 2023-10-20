import React from "react";

import Auth from "./pages/Auth";

import "semantic-ui-css/semantic.min.css";
import styles from "./css/App.css";

function App() {
  return (
    <div className={styles}>
      <Auth />
    </div>
  );
}

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div className={styles}>
//         <Navi />
//         <Container className="main">
//           <Dashboard />
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;
