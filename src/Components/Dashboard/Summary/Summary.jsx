import React, { useEffect, useState } from "react";
import Card from "./Cards/Cards";
import Chart from "./Charts/Chart";
import Table from "./Table/Table";
import SighthingCard from "./Cards/SighthingsCard/SighthingsCard";
import AllVisitsCard from "./Cards/AllVisits/AllVisits";
import VisitorsMap from "./Map/VisitorsMap/VisitorsMap";

function Summary() {
  const getAuthToken = () => localStorage.getItem("access_token");
  const token = getAuthToken();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRegisters = async () => {
      try {
        const response = await fetch(
          "https://netzapark-backend.onrender.com/admin_netzahualcoyotl/registers_count/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) throw new Error("Error al obtener los datos de popularidad");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRegisters();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="dashboard-container" style={styles.container}>
      {/* Tarjetas superiores */}
      <div style={styles.cardsRow}>
        <Card title="Registros totales" value={data.total_registers} subtitle="..." color="red" />
        <SighthingCard />
        <AllVisitsCard />
      </div>

      {/* Gráficos y tabla */}
      <div style={styles.middleRow}>
        <div style={styles.chartBox}>
          <Chart title="Visitas semanales" type="bar" />
        </div>
        <div style={styles.tableBox}>
          <Table title="Top animales" />
        </div>
      </div>

      {/* Mapa (ajustado y visible al hacer scroll) */}
      <div style={styles.mapContainer}>
        <h3 style={styles.mapTitle}>Mapa de visitas</h3>
        <div style={styles.mapWrapper}>
          <VisitorsMap />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    width: "100%",
    boxSizing: "border-box",
  },
  cardsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  middleRow: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    alignItems: "stretch",
  },
  chartBox: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minHeight: "350px",
  },
  tableBox: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minHeight: "350px",
  },
  mapContainer: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "100%",
  },
  mapTitle: {
    marginBottom: "10px",
    fontWeight: "600",
    color: "#333",
  },
  mapWrapper: {
    width: "100%",
    height: "400px",
    borderRadius: "12px",
    overflow: "hidden",
  },
};

export default Summary;
