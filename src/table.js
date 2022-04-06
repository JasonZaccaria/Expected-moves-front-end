import "./table.css";
import { useState, useEffect } from "react";

function Table(props) {
  //Here are our variabels we will pass into the table. These are props as well
  let expDates = props.expDates;
  let stdv_up = props.stdv_up;
  let stdv_down = props.stdv_down;
  console.log(expDates);

  //Below we use useEffect in order to update our table when our expDates variables's state is updated
  useEffect(() => {
    function updateTable() {
      console.log(expDates.length);
      let getTbody = document.getElementById("mainTbody");
      while (getTbody.firstChild) {
        getTbody.removeChild(getTbody.lastChild);
      }
      for (let i = 0; i < expDates.length; i++) {
        let createTr = document.createElement("tr");
        createTr.classList.add("tr-space-even");
        //changes start here:
        let createTdOne = document.createElement("td");
        let createTdTwo = document.createElement("td");
        let createTdThree = document.createElement("td");
        createTdOne.innerHTML = expDates[i];
        createTdTwo.innerHTML = stdv_up[i].toFixed(2);
        createTdThree.innerHTML = stdv_down[i].toFixed(2);
        createTr.appendChild(createTdOne);
        createTr.appendChild(createTdTwo);
        createTr.appendChild(createTdThree);
        //changes end here;
        getTbody.appendChild(createTr);
      }
    }
    updateTable();
  }, [expDates, stdv_up, stdv_down]);

  return (
    <div className="table-class">
      <table className="mainTable" id="mainTableId">
        <thead className="thead-space">
          <tr className="tr-space-even">
            <th className="th-space">Expiration Dates</th>
            <th className="th-space">Stdv Higher</th>
            <th className="th-space">Stdv Lower</th>
          </tr>
        </thead>
        <tbody id="mainTbody"></tbody>
      </table>
    </div>
  );
}

export default Table;
