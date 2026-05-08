import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

export const getWeather = async () => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Kyiv`
  );

  return response.data;
};