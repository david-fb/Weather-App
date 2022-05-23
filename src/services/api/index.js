const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  realtimeWeatherFrom: (query) => `${API}/current.json?q=${query}`,
  forecastWeatherFrom: (query) => `${API}/forecast.json?q=${query}`,
};

module.exports = endPoints;
