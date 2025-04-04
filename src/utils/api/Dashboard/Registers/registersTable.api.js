import axios from 'axios'


const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

const token = getAuthToken();

export const getTable = async (url, pageSize) => {
    const token = localStorage.getItem('access_token');
    try {
        const response = await axios.post(url, {
            page_size: pageSize, // Tamaño de la página
        }, {
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
            },
        });
        return response.data;
    } catch (error) {
        throw error; // Volver a lanzar el error para manejarlo en el componente
    }
};


export const createRegister = ( register ) => {
    return axios.post('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/add_register/', register,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
             "Content-Type": "multipart/form-data"
        },
    }
    );
};

export const deleteRegisters = ( id ) => {
    return axios.delete(`https://netzapark-backend.onrender.com/admin_netzahualcoyotl/add_register/` ,
    { headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        }, 
        data: { id }
    });
};

export const updateRegisters = ( register ) => {
    return axios.put(`https://netzapark-backend.onrender.com/admin_netzahualcoyotl/add_register/` , register,
    { headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        }, 
    });
};
