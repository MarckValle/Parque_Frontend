import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectThreat = ({ onChange }) => {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    const getAuthToken = () => localStorage.getItem('access_token');
    const token = getAuthToken();

    const fetchThreats = async () => {
      try {
        const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/create_threat/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        if (Array.isArray(data)) {
          setThreats(data);
        } else if (data.results && Array.isArray(data.results)) {
          setThreats(data.results);
        } else if (data.id && data.name) {
          setThreats([data]);
        } else {
          console.warn('Formato inesperado:', data);
          setThreats([]);
        }
      } catch (error) {
        console.error('Error al obtener las amenazas:', error);
      }
    };

    fetchThreats();
  }, []);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="threat-select" className="form-label">Amenazas</label>
      <select id="threat-select" className="form-select" onChange={handleChange} defaultValue="">
        <option value="" disabled>-- Selecciona una amenaza --</option>
        {threats.map((threat) => (
          <option key={threat.id} value={threat.id}>{threat.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectThreat;
