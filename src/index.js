import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RingoverProvider } from "./contexts/ringover-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RingoverProvider>
    <Router>
      <App />
    </Router>
  </RingoverProvider>
);
