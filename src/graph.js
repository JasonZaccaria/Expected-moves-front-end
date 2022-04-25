import "./graph.css";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function Graph(props) {
  const data = {
    labels: props.x,
    datasets: [
      {
        label: "First dataset",
        data: props.stdv_up,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: props.stdv_down,
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
