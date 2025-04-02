import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectHabitat = ( {onChange} ) => {
    const [habitats, setHabitats] = useState([]); // Guardar opciones del API

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchHabitats = async () => {
            try {
                const response = await axios.get('http://localhost:8000/admin_netzahualcoyotl/habitat/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                setHabitats(response.data); // Asumimos que la API devuelve un array en `results`
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchHabitats();
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); // Pasar el ID seleccionado al formulario principal
      };

    return (
        <div>
      <label htmlFor="status-select" className="form-label">Habitat</label>
      <select id="status-select" className="form-select" onChange={handleChange}>
        <option value="" disabled>-- Selecciona un alimento --</option>
        {habitats.map((habitat) => (
          <option key={habitat.id} value={habitat.id}>{habitat.name}</option>
        ))}
      </select>
    </div>
    );
};

export default SelectHabitat;
