import axios from 'axios';

export const login = async (data) => {
    try {
        const response = await axios.post('https://netzapark-backend.onrender.com/general/login/', data); // URL de tu backend para obtener el token
        const { access, refresh } = response.data;

        // Almacenar los tokens en localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);

        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};
