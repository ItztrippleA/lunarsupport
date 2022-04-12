import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

let root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App />);
