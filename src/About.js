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
    //getRoot.style.gridTemplateRows = "50px 0px 325px 300px 345px";
  }
  return (
    <div className="about-parent">
      <div className="About-description">
        <h2>What is the expected move of a stock?</h2>
        <p className="description-p">
          The expected move is an estimate of how far up or down a stock price
          will change at some specified point in time.
        </p>
      </div>
      <div className="left-description">
        <h3 className="formula">
          Formula: (Stock Price) x (IV/100) x [square root (DTE/365)]
        </h3>
        <div className="desciption-list">
          <p>
            The formula above is how we can calculate the expected move. IV
            stands for implied volatilty which is the forecasted volatilty
            estimate in the future. This is usually obtained via an options
            pricing model. ex. Black Scholes, binary pricing model...
          </p>
          <p>
            The formula above calculates the 1 standard deviation move in the
            underlying stock price based on these paramateres. However we can
            adjust the formula to view the 2 or even 3 standard deviations above
            or below the stock price as well by simply multiplying the IV by 2
            or 3.
          </p>
          <p>
            What is this used for exactly? Well this can be used to gauge the
            probability range of an underlying's price at a particular time in
            the future. This tool was built to help visualize the current
            probabitly range for each expiration date based on the current IV.
            However, all these variables are constantly changing and due to
            stock returns not being normally distirbued due to black swan
            events. These estimates should be taken with a grain of salt and
            used as a simple means to view the current prediction of price
            movement in the future.
          </p>
        </div>
      </div>
      <div className="right-description">
        <h3 className="link-title">
          Here are some useful links and resources to learn more about options
          implied volatilty and expected moves.
        </h3>
        <div className="list-of-links">
          <div>
            <a href="https://youtu.be/T8UmYi50onw">
              <img
                className="tasty-trade"
                src={require("./assets/tastytrade.jpg")}
              ></img>
            </a>
          </div>
          <div>
            <a href="https://youtu.be/T8UmYi50onw">
              <img
                className="other-images"
                src={require("./assets/projectoption.jpg")}
              ></img>
            </a>
          </div>
          <div>
            <a href="https://youtu.be/T8UmYi50onw">
              <img
                className="other-images"
                src={require("./assets/investopedia.png")}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
