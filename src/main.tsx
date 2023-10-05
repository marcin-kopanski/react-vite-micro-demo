import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "src/App";
import MicroDemoRoutes from "src/components/MicroDemoRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <MicroDemoRoutes />
    </App>
  </React.StrictMode>,
);
