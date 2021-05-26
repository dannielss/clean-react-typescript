import React from "react";
import ReactDOM from "react-dom";
import { ListRepositoriesFactory } from "./main/factories/pages/ListRepositories";

ReactDOM.render(
  <React.StrictMode>
    <ListRepositoriesFactory />
  </React.StrictMode>,
  document.getElementById("root")
);
