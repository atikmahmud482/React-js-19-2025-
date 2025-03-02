import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Apptwo from "./Apptwo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Apptwo></Apptwo>
  </StrictMode>
);
