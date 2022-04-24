import "./About.css";
import Navbar from "./navbar";
import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function About() {
  function changeRootGrid() {
    const getRoot = document.getElementById("root");
    //getRoot.style.gridTemplateRows = "50px repeat(11, 1fr)"; THIS IS OLD
    //getRoot.style.gridTemplateRows = "50px repeat(11, fit-content(100%))"; USED TO BE
    getRoot.style.gridTemplateRows = "50px 0px repeat(10, fit-content(100%)";
    getRoot.style.rowGap = "1rem";
  }
  changeRootGrid();
  return (
    <>
      <div className="description-container">
        <h2 className="description-h">What is the expected move of a stock?</h2>
        <p className="description-p">
          The expected move is an estimate of how far up or down a stock price
          will change at some specified point in time.
        </p>
      </div>
      <div className="About-tile-one">
        <h3 className="formula">
          Formula: (Stock Price) x (IV/100) x [square root (DTE/365)]
        </h3>
        <p className="description-p">
          The formula above is how we can calculate the expected move. IV stands
          for implied volatilty which is the forecasted volatilty estimate in
          the future. This is usually obtained via an options pricing model. ex.
          Black Scholes, binary pricing model...
        </p>
      </div>
      <div className="About-tile-two">
        <h3 className="formula">Standard deviations </h3>
        <p className="description-p">
          The formula above calculates the 1 standard deviation move in the
          underlying stock price based on these paramateres. However we can
          adjust the formula to view the 2 or even 3 standard deviations above
          or below the stock price as well by simply multiplying the IV by 2 or
          3.
        </p>
      </div>
      <div className="About-tile-three">
        <h3 className="formula">Where is it helpful and limitations</h3>
        <p className="description-p">
          What is this used for exactly? Well this can be used to gauge the
          probability range of an underlying's price at a particular time in the
          future. This tool was built to help visualize the current probabitly
          range for each expiration date based on the current IV. However, all
          these variables are constantly changing and due to stock returns not
          being normally distirbued due to black swan events. These estimates
          should be taken with a grain of salt and used as a simple means to
          view the current prediction of price movement in the future.
        </p>
      </div>
      <div className="About-link-tiles">
        <h3 className="link-description">Here are some useful links</h3>
        <div className="all-images">
          <div className="image-one-container">
            <a href="asdfa">
              <img
                className="image-one"
                src={require("./assets/tastytrade.jpg")}
              ></img>
            </a>
          </div>
          <div className="image-two-container">
            <a href="asa">
              <img
                className="image-two"
                src={require("./assets/projectoption.jpg")}
              ></img>
            </a>
          </div>
          <div className="image-three-container">
            <a href="asd">
              <img
                className="image-three"
                src={require("./assets/investopedia.png")}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
