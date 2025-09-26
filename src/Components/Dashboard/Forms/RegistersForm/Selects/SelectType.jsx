import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectType = ({ onChange }) => {
    const [types, setTypes] = useState([]); // Guardar opciones del API

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchTypes = async () => {
            try {
                const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/type_register/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                let data = response.data;

        // Asegúrate de que sea un array
        if (Array.isArray(data)) {
          setTypes(data);
        } else if (data.results && Array.isArray(data.results)) {
          setTypes(data.results);
        } else if (data.id && data.status) {
          // Caso en que viene un solo objeto
          setTypes([data]);
        } else {
          console.warn('Formato inesperado en la respuesta de la API:', data);
          setTypes([]);
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setTypes([]);
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
      <label htmlFor="type-select" className="form-label">Tipo de Registro</label>
      <select 
        id="type-select" 
        className="form-select" 
        onChange={handleChange}
        defaultValue=""
       >
        <option value="" disabled>-- Selecciona un tipo --</option>
        {types.map((type) => (
          <option key={type.id} value={type.id}>{type.type_register}</option>
        ))}
      </select>
    </div>
    );
};

export default SelectType;
