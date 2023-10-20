import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CookiesProvider } from "react-cookie";

import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
