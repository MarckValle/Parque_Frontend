import React, { useEffect, useState } from "react";

const Table = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRegisters = async () => {
      try {
        const response = await fetch("https://netzapark-backend.onrender.com/admin_netzahualcoyotl/most_visited_register/");
        if (!response.ok) {
          throw new Error("Error al obtener los datos de popularidad");
        }

        const result = await response.json();
        setData(result.top_registers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRegisters();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="table mt-3">
      <h4>{title}</h4>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Popularidad</th>
            <th>Visitas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.popularity}</td>
              <td>{row.visits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
