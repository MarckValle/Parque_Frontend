import axios from 'axios'


export const createSighthing = async (formData) => {
  const token = localStorage.getItem("access_token");

  return axios.post("https://netzapark-backend.onrender.com/general_netzahualcoyotl/add_sighthing/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
};

export const getSighthing = async (formData) => {
  const token = localStorage.getItem("access_token");

  return axios.get("https://netzapark-backend.onrender.com/get_sights/?page_size=10", formData, {
    headers: {
    }
  });
};
