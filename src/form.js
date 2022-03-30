import "./form.css";
import React, { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
//import TestGraph from "./testGraph.js";
//import { Chart } from "chart.js";
import Table from "./table.js";

function Form() {
  //Below we have states for our Table component to create a table after graph
  //Below we create states for our x axis (expiration dates column).
  let [expDates, setExpDates] = useState([]);
  let [stdv_up, setStdv_up] = useState([]);
  let [stdv_down, setStdv_down] = useState([]);
  //Below here we create states for our quotes.
  let [updateAdjClose, setUpdateAdjClose] = useState(0);
  let [updateOpen, setUpdateOpen] = useState(0);
  let [updateHigh, setUpdateHigh] = useState(0);
  let [updateLow, setUpdateLow] = useState(0);
  let [updateVol, setUpdateVol] = useState(0);
  let [callPost, setCallPost] = useState({});
  let [callGet, setCallGet] = useState({});
  //below is our state for disabling our onclick until our function finishes completely
  let [isDisabled, setIsDisabled] = useState(false);
  //below are our refs for disabling our keeping track of button clicks and handling our first render
  let count = useRef(false);
  let clear = useRef(0);
  //below is our ref for clearing our setinterval
  let stopInterval = useRef();

  let data = {
    labels: expDates, //["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Stdv higher",
        data: stdv_up, //[33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Stdv Lower",
        data: stdv_down, //[33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  //This is our onclick function to access our backends rest api for data
  async function changeMe(e) {
    //we start off by disabling our button while running and preventing html form from submitting
    setIsDisabled(true);
    e.preventDefault();
    clear.current++;
    //below is our post request
    async function post() {
      const url = "http://127.0.0.1:8000/post/";
      const data = new URLSearchParams();
      const formElement = document.getElementById("form-itself");
      for (const pair of new FormData(formElement)) {
        data.append(pair[0], pair[1]);
      }
      const response = await fetch(url, {
        method: "POST",
        body: data,
        credentials: "include",
      });
      return response.json();
    }
    //below is our get request
    async function get() {
      const response = await fetch("http://127.0.0.1:8000/get/", {
        credentials: "include",
      });
      return response.json();
    }
    //below we are sending both requests out at the same time as well as repeating our get request with set interval
    async function combineRequests() {
      async function sendRequests() {
        let createPost = await post();
        let createGet = await get();
        setCallPost(createPost);
        setCallGet(createGet);
      }
      let getResponses = await sendRequests();
      stopInterval.current = setInterval(async () => {
        let repeater = await get();
        setCallGet(repeater);
      }, 3000);
    }
    if (clear.current === 1) {
      let finalResponse = await combineRequests();
    } else {
      clearInterval(stopInterval.current);
      let finalResponse = await combineRequests();
      clear.current = 1;
    }
    //we undisable our button finally
    setIsDisabled(false);
  }
  //Below we use count.current to keep track of first render and then update our states and change data
  useEffect(() => {
    if (count.current) {
      console.log(stopInterval);
      let update = [callPost, callGet];
      console.log(update);
      console.log(update[1]["quotes"]["Open"][0]);

      //Below we are seperating out all the arrays to get ready to reset our state to these new arrays
      let updateX = update[0]["expected_moves"]["exp_dates"];
      let updateStdvUp = update[0]["expected_moves"]["higher"];
      let updateStdvDown = update[0]["expected_moves"]["lower"];

      //Changing state now in function
      setUpdateAdjClose(update[1]["quotes"]["Adj Close"][0]);
      setUpdateOpen(update[1]["quotes"]["Open"][0]);
      setUpdateHigh(update[1]["quotes"]["High"][0]);
      setUpdateLow(update[1]["quotes"]["Low"][0]);
      setUpdateVol(update[1]["quotes"]["Volume"][0]);

      data = {
        labels: setExpDates(updateX), //["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: setStdv_up(updateStdvUp), //[33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
          },
          {
            label: "Second dataset",
            data: setStdv_down(updateStdvDown), //[33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774",
          },
        ],
      };
    } else {
      count.current = true;
    }
  }, [callGet]);
  return (
    <>
      <div className="form-class" id="form-id">
        <div className="form-container" id="form-container-id">
          <p className="form-description">
            Welcome this tool allows you to view the probabilty cone of a ticker
            symbol.
          </p>
          <form
            id="form-itself"
            className="form"
            action="http://127.0.0.1:8000/post/"
            method="POST"
          >
            <div className="form-top">
              <label htmlFor="text">Enter Ticker</label>
              <input className="text-input" type="text" name="text"></input>
            </div>
            <div className="radio-container">
              <label htmlFor="radio">Standard Deviation</label>
              <div className="radio-sub-container">
                <label htmlFor="radioOne" className="labelsClass">
                  1
                </label>
                <input
                  type="radio"
                  name="radio"
                  value="None"
                  id="radioOne"
                  defaultChecked
                ></input>
                <label htmlFor="radioTwo" className="labelsClass">
                  2
                </label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  id="radioTwo"
                ></input>
                <label htmlFor="radioThree" className="labelsClass">
                  3
                </label>
                <input
                  type="radio"
                  name="radio"
                  value="3"
                  id="radioThree"
                ></input>
              </div>
            </div>
            <div className="button-container">
              <button
                className="button-submit"
                type="submit"
                onClick={changeMe}
                disabled={isDisabled}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="quotes">
          <table className="table">
            <thead className="tableHead">
              <tr className="tableRows">
                <th className="th">Price</th>
                <th className="th">Open</th>
                <th className="th">High</th>
                <th className="th">Low</th>
                <th className="th">Volume</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr className="tableRows">
                <td className="td">{updateAdjClose.toFixed(2)}</td>
                <td className="td">{updateOpen.toFixed(2)}</td>
                <td className="td">{updateHigh.toFixed(2)}</td>
                <td className="td">{updateLow.toFixed(2)}</td>
                <td className="td">{updateVol.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="Graph-container">
        <div className="mini">
          <Line data={data} options={{ maintainAspectRatio: false }} />
          <h1>Hello worldadf asdf</h1>
        </div>
      </div>
      <Table expDates={expDates} stdv_up={stdv_up} stdv_down={stdv_down} />
    </>
  );
}

export default Form;
