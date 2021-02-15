import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//render CardList
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { robots } from "./robots";

ReactDOM.render(
  // greeting =(adding prop)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
