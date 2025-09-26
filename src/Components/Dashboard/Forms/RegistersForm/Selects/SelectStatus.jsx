import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatusSelect = ({ onChange }) => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const getAuthToken = () => localStorage.getItem('access_token');
    const token = getAuthToken();

    const fetchStatuses = async () => {
      try {
        const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/status/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        let data = response.data;

        // Asegúrate de que sea un array
        if (Array.isArray(data)) {
          setStatuses(data);
        } else if (data.results && Array.isArray(data.results)) {
          setStatuses(data.results);
        } else if (data.id && data.status) {
          // Caso en que viene un solo objeto
          setStatuses([data]);
        } else {
          console.warn('Formato inesperado en la respuesta de la API:', data);
          setStatuses([]);
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setStatuses([]);
      }
    };

    fetchStatuses();
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="status-select" className="form-label">Estatus</label>
      <select
        id="status-select"
        className="form-select"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>-- Selecciona un estatus --</option>
        {statuses.map((status) => (
          <option key={status.id} value={status.id}>{status.status}</option>
        ))}
      </select>
    </div>
  );
};

export default StatusSelect;
