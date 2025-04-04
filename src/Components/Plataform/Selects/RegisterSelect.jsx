import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegisterSelect = ({ onChange }) => {
    const [types, setTypes] = useState([]); // Guardar opciones del API
    const [selectedTypes, setSelectedTypes] = useState(''); // Valor seleccionado

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchTypes = async () => {
            try {
                const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/add_register/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                setTypes(response.data); // Asumimos que la API devuelve un array en `results`
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchTypes();
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); // Pasar el ID seleccionado al formulario principal
      };

    return (
        <div>
      <label htmlFor="type-select" className="form-label">Nombre</label>
      <select id="type-select" className="form-select" onChange={handleChange}>
        <option value="" disabled>-- Selecciona un Nombre --</option>
        {types.map((type) => (
          <option key={type.id} value={type.id}>{type.name}</option>
        ))}
      </select>
    </div>
    );
};

export default RegisterSelect;
