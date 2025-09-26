import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegisterSelect = ({ onChange }) => {
    const [names, setNames] = useState([]); // Guardar opciones del API
    const [selectedNames, setSelectedNames] = useState(''); // Valor seleccionado

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchNames = async () => {
            try {
                const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/add_register/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                let data = response.data;

        // Asegúrate de que sea un array
        if (Array.isArray(data)) {
          setNames(data);
        } else if (data.results && Array.isArray(data.results)) {
          setNames(data.results);
        } else if (data.id && data.status) {
          // Caso en que viene un solo objeto
          setNames([data]);
        } else {
          console.warn('Formato inesperado en la respuesta de la API:', data);
          setNames([]);
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setNames([]);
      }
        };

        fetchNames();
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); // Pasar el ID seleccionado al formulario principal
      };

    return (
        <div>
      <label htmlFor="name-select" className="form-label">Nombre</label>
      <select 
        id="name-select" 
        className="form-select" 
        onChange={handleChange}
        defaultValue="">
        <option value="" disabled>-- Selecciona un Nombre --</option>
        {names.map((name) => (
          <option key={name.id} value={name.id}>{name.name}</option>
        ))}
      </select>
    </div>
    );
};

export default RegisterSelect;
