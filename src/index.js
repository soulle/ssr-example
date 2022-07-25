import React from "react";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

hydrateRoot(
  root,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
