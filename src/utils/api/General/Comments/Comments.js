import axios from 'axios'


export const createComment = async (data) => {
  const token = localStorage.getItem("access_token");

  return axios.post("https://netzapark-backend.onrender.com/general_netzahualcoyotl/send_comments/", data, {
    headers: {
      "Content-Type": "application/json",
    }
  });
};
