import React from "react";
import { createRoot } from "react-dom/client";
import DemoApp from "./App";
import "../src/global.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
);
