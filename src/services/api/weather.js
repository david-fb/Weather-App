import endPoints from '@services/api/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
};

const getWeatherFrom = async (query) => {
  try {
    const response = await fetch(endPoints.realtimeWeatherFrom(query), options);
    const data = await response.json();

    const { location, current } = data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, feelsLike_f, is_day, temp_c, temp_f, wind_mph, wind_kph, wind_dir } = current;
    const { text, icon } = condition;

    const body = {
      conditionText: text,
      conditionIcon: icon,
      country,
      localtime,
      locationName: name,
      humidity,
      isDay: is_day,
      feelsLike: { C: feelslike_c, F: feelsLike_f },
      temperature: { C: temp_c, F: temp_f },
      windSpeed: { K: wind_kph, M: wind_mph },
      windDir: wind_dir,
    };

    return body;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getWeatherFrom };
