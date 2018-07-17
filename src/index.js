import React from "react";
import ReactDOM from "react-dom";
import { HelloContainer } from "../src/containers/HelloContainer";

const Index = () => {
  return <HelloContainer />;
};

ReactDOM.render(<Index />, document.getElementById("app"));