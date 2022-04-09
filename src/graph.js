import "./graph.css";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

//const data = {
//labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//datasets: [
//{
//label: "First dataset",
//data: [33, 53, 85, 41, 44, 65],
//fill: true,
//backgroundColor: "rgba(75,192,192,0.2)",
//borderColor: "rgba(75,192,192,1)",
//},
//{
//label: "Second dataset",
//data: [33, 25, 35, 51, 54, 76],
//fill: false,
//borderColor: "#742774",
//},
//],
//};

function Graph(props) {
  //console.log(props.stdv_up);
  const data = {
    labels: props.x, //["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: props.stdv_up, //[33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: props.stdv_down, //[33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <div className="Graph-container">
      <div className="mini">
        <Line data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}
export default Graph;
