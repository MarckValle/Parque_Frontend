import axios from 'axios'


export const createComment = async (data) => {
  const token = localStorage.getItem("access_token");

  return axios.post("http://localhost:8000/general_netzahualcoyotl/send_comments/", data, {
    headers: {
      "Content-Type": "application/json",
    }
  });
};
