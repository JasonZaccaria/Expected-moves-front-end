import "./form.css";
import { useState } from "react";
import Graph from "./graph.js";
//we will need to add a try and catch here. This is to catch potential errors usres may place into our form!!!

function Form() {
  //let counter = 0;
  let x;
  let stdv_up;
  let stdv_down;
  let callPost;
  async function n(e) {
    e.preventDefault();
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
    async function get() {
      const response = await fetch("http://127.0.0.1:8000/get/", {
        credentials: "include",
      });
      return response.json();
    }
    async function together() {
      let callPost = await post();
      let callGet = await get();
      return [callPost, callGet];
    }
    stdv_up = await together();
    console.log(stdv_up[1]["quotes"]["Open"][0]);
    stdv_up = stdv_up[0]["expected_moves"]["exp_dates"][0];
    //return x;
    //console.log(x[0]["expected_moves"]);
    console.log(stdv_up);
  }
  //let x = [1, 2, 3, 4, 5, 6]; //we are testing this out to show how to padd props into graph and it works lol
  //let stdv_up = [1, 2, 4, 5, 5, 5]; //we are testing
  //let stdv_down = [1, 1, 2, 3, 4, 2]; //we are testing
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
                <input
                  type="radio"
                  name="radio"
                  value="None"
                  defaultChecked
                ></input>
                <input type="radio" name="radio" value="2"></input>
                <input type="radio" name="radio" value="3"></input>
              </div>
            </div>
            <div className="button-container">
              <button className="button-submit" type="submit" onClick={n}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="quotes">
          <table className="table">
            <tr>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
      <Graph x={x} stdv_up={stdv_up} stdv_down={stdv_down} />
    </>
  );
}

export default Form;
