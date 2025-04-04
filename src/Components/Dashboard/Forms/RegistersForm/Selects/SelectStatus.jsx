import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatusSelect = ( {onChange} ) => {
    const [statuses, setStatuses] = useState([]); // Guardar opciones del API

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchStatuses = async () => {
            try {
                const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/status/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                setStatuses(response.data); // Asumimos que la API devuelve un array en `results`
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchStatuses();
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); // Pasar el ID seleccionado al formulario principal
      };

    return (
        <div>
      <label htmlFor="status-select" className="form-label">Estatus</label>
      <select id="status-select" className="form-select" onChange={handleChange}>
        <option value="" disabled>-- Selecciona un estatus --</option>
        {statuses.map((status) => (
          <option key={status.id} value={status.id}>{status.status}</option>
        ))}
      </select>
    </div>
    );
};

export default StatusSelect;
