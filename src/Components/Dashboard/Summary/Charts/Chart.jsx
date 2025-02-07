import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Chart = ({ title }) => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Online Sales",
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: "#007bff",
      },
      {
        label: "Offline Sales",
        data: [15, 25, 35, 45, 55, 65, 75],
        backgroundColor: "#28a745",
      },
    ],
  };

  return (
    <div className="chart">
      <h4>{title}</h4>
      <Bar data={data} />
    </div>
  );
};

export default Chart;
