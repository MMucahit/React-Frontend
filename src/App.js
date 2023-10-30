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
