import axios from 'axios'


export const createSighthing = async (formData) => {
  const token = localStorage.getItem("access_token");

  return axios.post("http://localhost:8000/general_netzahualcoyotl/add_sighthing/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
};
