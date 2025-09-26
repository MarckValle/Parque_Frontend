import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectHabitat = ({ onChange }) => {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    const getAuthToken = () => localStorage.getItem('access_token');
    const token = getAuthToken();

    const fetchHabitats = async () => {
      try {
        const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/habitat/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        if (Array.isArray(data)) {
          setHabitats(data);
        } else if (data.results && Array.isArray(data.results)) {
          setHabitats(data.results);
        } else if (data.id && data.name) {
          setHabitats([data]);
        } else {
          console.warn('Formato inesperado:', data);
          setHabitats([]);
        }
      } catch (error) {
        console.error('Error al obtener los hábitats:', error);
      }
    };

    fetchHabitats();
  }, []);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="habitat-select" className="form-label">Hábitat</label>
      <select id="habitat-select" className="form-select" onChange={handleChange} defaultValue="">
        <option value="" disabled>-- Selecciona un hábitat --</option>
        {habitats.map((habitat) => (
          <option key={habitat.id} value={habitat.id}>{habitat.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectHabitat;
