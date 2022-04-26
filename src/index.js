import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/navbar";
import DropDown from "./components/dropdown";
import Form from "./components/form";
import Graph from "./components/graph";
import Table from "./components/table";
import About from "./components/About";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <DropDown />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <DropDown />
              <Form />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
