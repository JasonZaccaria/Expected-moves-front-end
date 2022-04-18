import "./navbar.css";
import About from "./About";
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function Navbar() {
  let bool = false;
  //This event listener will resize our root grid rows to handle unexpected changes from our dropdown function
  window.addEventListener("resize", function (event) {
    if (this.window.innerWidth >= 768 && window.innerWidth < 1440) {
      const getRoot = document.getElementById("root");
      getRoot.style.gridTemplateRows = "50px 1fr 1fr";
    } else if (this.window.innerWidth >= 1440) {
      const getRoot = document.getElementById("root");
      getRoot.style.gridTemplateRows = "50px 0.8fr 1fr";
    }
  });
  function dropDown() {
    const lineOne = document.getElementById("lineOne");
    const lineTwo = document.getElementById("lineTwo");
    const lineThree = document.getElementById("lineThree");
    let action = document.getElementById("drop-menu-id");
    let resize = document.getElementById("form-container-id");
    let resizePlus = document.getElementById("root");
    if (bool) {
      bool = false;
      lineOne.style.transform = "rotate(0deg) translate(0px, 0px)";
      lineOne.style.transition = "all .3s ease-in-out";
      lineTwo.style.opacity = "100%";
      lineTwo.style.transition = "all .3s ease-in-out";
      lineThree.style.transform = "rotate(0deg) translate(0px, 0px)";
      lineThree.style.transition = " all .3s ease-in-out";
      action.style.display = "none";
      action.style.height = "0%";
      action.style.width = "0%";
      resizePlus.style.gridTemplateRows = "50px 0px 325px 300px 345px";
      action.style.transition = "all 5s ease-in-out";
    } else {
      bool = true;
      lineOne.style.transform = "rotate(45deg) translate(6px, 6px)";
      lineOne.style.transition = "all .3s ease-in-out";
      lineTwo.style.opacity = "0%";
      lineTwo.style.transition = "all .3s ease-in-out";
      lineThree.style.transform = "rotate(-45deg) translate(6px, -6px)";
      lineThree.style.transition = "all .3s ease-in-out";
      action.style.display = "flex";
      action.style.height = "100%";
      action.style.width = "100%";
      resizePlus.style.gridTemplateRows = "50px 150px 325px 300px 345px";
      //action.style.transition = "all 5s ease-in-out";
    }
  }
  return (
    //<Router>
    //<Routes>
    <div className="nav-bar">
      <div
        className="menu-button-container"
        id="hamburger-id"
        onClick={dropDown}
      >
        <div className="burger-one" id="lineOne"></div>
        <div className="burger-two" id="lineTwo"></div>
        <div className="burger-three" id="lineThree"></div>
      </div>
      <div className="navbar-buttons">
        <div className="link-one">Home</div>
        <div className="link-two">About</div>
      </div>
      <h1 className="nav-title">Options Analysis Tool</h1>
      <div className="empty-space"></div>
    </div>
    //</Routes>
    //</Router>
  );
}
export default Navbar;
