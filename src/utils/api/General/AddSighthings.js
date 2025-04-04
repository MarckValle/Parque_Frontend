import axios from 'axios'


export const createSighthing = async (formData) => {
  const token = localStorage.getItem("access_token");

  return axios.post("https://netzapark-backend.onrender.com/general_netzahualcoyotl/add_sighthing/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
};
