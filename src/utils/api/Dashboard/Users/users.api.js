import axios from 'axios'


const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

const token = getAuthToken();

export const createUsers = ( data ) => {
    return axios.post('http://localhost:8000/admin_netzahualcoyotl/add_users/', data,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        },
    }
    );
};

export const deleteUsers = ( id ) => {
    return axios.delete(`http://localhost:8000/admin_netzahualcoyotl/add_users/` ,
    { headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        }, 
        data: { id }
    });
};

export const getTableUsers = async (page = 1, pageSize = 10) => {
    const token = localStorage.getItem('access_token');
    try {
        const response = await axios.post('http://localhost:8000/admin_netzahualcoyotl/table_users/',{
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
            },
            params: {
                page: page,
                page_size: pageSize,
            },
        });
        return response;
    } catch (error) {
        throw error; // Volver a lanzar el error para manejarlo en el componente
    }
};
