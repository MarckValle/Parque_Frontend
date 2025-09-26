import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectFeed = ({ onChange }) => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const getAuthToken = () => localStorage.getItem('access_token');
    const token = getAuthToken();

    const fetchFeeds = async () => {
      try {
        const response = await axios.get('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/create_feed/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        if (Array.isArray(data)) {
          setFeeds(data);
        } else if (data.results && Array.isArray(data.results)) {
          setFeeds(data.results);
        } else if (data.id && data.name) {
          setFeeds([data]);
        } else {
          console.warn('Formato inesperado:', data);
          setFeeds([]);
        }
      } catch (error) {
        console.error('Error al obtener los feeds:', error);
      }
    };

    fetchFeeds();
  }, []);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="feed-select" className="form-label">Alimento</label>
      <select id="feed-select" className="form-select" onChange={handleChange} defaultValue="">
        <option value="" disabled>-- Selecciona un alimento --</option>
        {feeds.map((feed) => (
          <option key={feed.id} value={feed.id}>{feed.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectFeed;
