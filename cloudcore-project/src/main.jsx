import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import store from "./redux/store.js"; // your redux store
import App from "./App"; // main app component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      {/* Wrap your app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>
);
