import React from "react";
import ReactDOM from "react-dom/client";
import { Icon } from "@shopify/polaris";
import { AddMajor } from "@shopify/polaris-icons";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Icon source={AddMajor} />
  </React.StrictMode>
);
