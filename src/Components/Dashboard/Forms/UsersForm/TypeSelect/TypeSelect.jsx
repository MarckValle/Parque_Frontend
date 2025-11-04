import React, { useState, useEffect } from "react";
import axios from "axios";

function TypeSelect({ onChange }) {
  const [typesU, setTypesU] = useState([]);
  const [selectedValue, setSelectedValue] = useState(""); // 🔹 Controla el valor del select

  useEffect(() => {
    const getAuthToken = () => localStorage.getItem("access_token");
    const token = getAuthToken();

    const fetchTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/admin_netzahualcoyotl/user_type/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTypesU(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchTypes();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value); // 🔹 Actualiza el estado local
    onChange(value); // 🔹 Envía el valor al componente padre
  };

  return (
    <>
      <label htmlFor="types-select" className="form-label">
        Tipo de Usuario
      </label>
      <select
        id="types-select"
        className="form-select"
        value={selectedValue} // 🔹 Controlado por React
        onChange={handleChange}
      >
        <option value="" disabled>
          -- Selecciona el tipo de usuario --
        </option>
        {typesU.map((type) => (
          <option key={type.id} value={type.id}>
            {type.type_user}
          </option>
        ))}
      </select>
    </>
  );
}

export default TypeSelect;
