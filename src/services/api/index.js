const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  realtimeWeatherFrom: (query) => `${API}/current.json?q=${query}`,
  forecastWeatherFrom: (query, days = 3) => `${API}/forecast.json?q=${query}&days=${days}`,
  searchLocation: (query) => `${API}/search.json?q=${query}`,
};

module.exports = endPoints;
