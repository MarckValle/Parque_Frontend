import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectFeed = ( {onChange} ) => {
    const [feeds, setFeeds] = useState([]); // Guardar opciones del API

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchFeeds = async () => {
            try {
                const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/create_feed/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                setFeeds(response.data); // Asumimos que la API devuelve un array en `results`
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchFeeds();
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); // Pasar el ID seleccionado al formulario principal
      };

    return (
        <div>
      <label htmlFor="status-select" className="form-label">Alimento</label>
      <select id="status-select" className="form-select" onChange={handleChange}>
        <option value="" disabled>-- Selecciona un alimento --</option>
        {feeds.map((feed) => (
          <option key={feed.id} value={feed.id}>{feed.name}</option>
        ))}
      </select>
    </div>
    );
};

export default SelectFeed;
