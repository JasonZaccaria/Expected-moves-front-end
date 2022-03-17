//  import "./dropdown.css";
import { Chart } from "chart.js/auto";
//import { Chart, ArcElement } from "chart.js";
import { Line } from "react-chartjs-2";
//Chart.register(ArcElement);

//const data = {
//labels: ["Red", "Green", "Blue"],
//datasets: [
//{
//data: [12, 19, 3],
//},
//],
//};
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

function DoughnutChart() {
  return (
    <div>
      <Line data={data} />
    </div>
  );
}
export default DoughnutChart;
