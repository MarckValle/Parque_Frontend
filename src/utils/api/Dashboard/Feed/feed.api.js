import axios from 'axios'


const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

const token = getAuthToken();



export const getAllHabitats = async () => {
    const token = localStorage.getItem('access_token');
    try {
        const response = await axios.get('http://localhost:8000/admin_netzahualcoyotl/habitat/', {
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
            },
        });
        return response;
    } catch (error) {
        throw error; // Volver a lanzar el error para manejarlo en el componente
    }
};

export const getTableThreat = async (url, pageSize) => {
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

export const createFeed = ( feed ) => {
    return axios.post('http://localhost:8000/admin_netzahualcoyotl/create_feed/', feed,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
            "Content-Type": "multipart/form-data"
        },
    }
    );
};

export const editThreat = async (data) => {
    try {
        const response = await axios.put(
            "http://localhost:8000/admin_netzahualcoyotl/create_threat/",
            data, 
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error en la API:", error.response ? error.response.data : error);
        throw error.response ? error.response.data : error;
    }
};


export const deleteFeed = ( id ) => {
    return axios.delete(`http://localhost:8000/admin_netzahualcoyotl/create_feed/`, 
    { headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        }, 
        data: { id }
    });
};


export const getTableFeed = async (url, pageSize) => {
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