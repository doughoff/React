import React from "react";
import ReactDOM from "react-dom";
// import './original/index.css';
import App from "./ex10/App";
import * as serviceWorker from "./original/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
const renderedApp = ReactDOM.render(<App />, document.getElementById("root"));

setTimeout(() => {
  console.log(8.1, "Mr. Lemon", "Yellow Freight");
  renderedApp.setState({
    exercise: { number: 10.1, title: "State change 1" },
    author: { name: "Mr. Lemon", company: "Yellow Freight" },
    update: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
  });
}, 3000);

setTimeout(() => {
  console.log(8.2, "Mr. Rich", "Success Corp.");
  renderedApp.setState({
    exercise: { number: 10.2, title: "State change 2" },
    author: { name: "Mr. Rich", company: "Success Corp." },
    update: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
  });
}, 6000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

