import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ title }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Llamar a tu endpoint en Django (ajusta la URL)
    fetch("http://127.0.0.1:8000/admin_netzahualcoyotl/visits_chart/")
      .then((res) => res.json())
      .then((data) => {
        // Transformar los datos del backend al formato que usa Chart.js
        const weeklyLabels = data.weekly.map((item) =>
          new Date(item.week).toLocaleDateString("es-MX", { weekday: "short" })
        );
        const weeklyValues = data.weekly.map((item) => item.visitas);

        const monthlyLabels = data.monthly.map((item) =>
          new Date(item.month).toLocaleDateString("es-MX", { month: "short" })
        );
        const monthlyValues = data.monthly.map((item) => item.visitas);

        setChartData({
          weekly: {
            labels: weeklyLabels,
            datasets: [
              {
                label: "Visitas Semanales",
                data: weeklyValues,
                backgroundColor: "#007bff",
              },
            ],
          },
          monthly: {
            labels: monthlyLabels,
            datasets: [
              {
                label: "Visitas Mensuales",
                data: monthlyValues,
                backgroundColor: "#28a745",
              },
            ],
          },
        });
      })
      .catch((err) => console.error("Error cargando datos:", err));
  }, []);

  if (!chartData) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="chart-container" style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
      {/* Gráfica semanal */}
      <div style={{ width: "45%" }}>
        <h4>{title || "Visitas Semanales"}</h4>
        <Bar data={chartData.weekly} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>

      {/* Gráfica mensual */}
      <div style={{ width: "45%" }}>
        <h4>Visitas Mensuales</h4>
        <Bar data={chartData.monthly} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>
    </div>
  );
};

export default Chart;
