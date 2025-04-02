import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectThreat = ( {onChange} ) => {
    const [threats, setThreats] = useState([]); // Guardar opciones del API

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchThreats = async () => {
            try {
                const response = await axios.get('http://localhost:8000/admin_netzahualcoyotl/create_threat/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                setThreats(response.data); // Asumimos que la API devuelve un array en `results`
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchThreats();
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); // Pasar el ID seleccionado al formulario principal
      };

    return (
        <div>
      <label htmlFor="status-select" className="form-label">Amenazas</label>
      <select id="status-select" className="form-select" onChange={handleChange}>
        <option value="" disabled>-- Selecciona una amenza --</option>
        {threats.map((threat) => (
          <option key={threat.id} value={threat.id}>{threat.name}</option>
        ))}
      </select>
    </div>
    );
};

export default SelectThreat;
