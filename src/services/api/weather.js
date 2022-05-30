import endPoints from '@services/api/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
};

const formatForecast = (forecast) => {
  let optionsDate = { weekday: 'long' };
  let optionsDateHour = { hour: '2-digit', minute: '2-digit' };
  const dailyForecast = [];

  for (let i = 0; i < forecast.length; i++) {
    dailyForecast[i] = {
      date: new Date(forecast[i].date.split('-').join('/')).toLocaleDateString('en-US', optionsDate),
      day: {
        maxtemp_c: forecast[i].day.maxtemp_c,
        mintemp_c: forecast[i].day.mintemp_c,
        maxtemp_f: forecast[i].day.maxtemp_f,
        mintemp_f: forecast[i].day.mintemp_f,
        condition: {
          icon: forecast[i].day.condition.icon,
        },
      },
      hour: forecast[i].hour.map((hour) => {
        return {
          time: new Date(hour.time).toLocaleTimeString('en-US', optionsDateHour),
          condition: {
            icon: hour.condition.icon,
          },
          temp_c: hour.temp_c,
          temp_f: hour.temp_f,
        };
      }),
    };
    if (i === 0) {
      dailyForecast[i] = {
        ...dailyForecast[i],
        date: 'Today',
      };
    } else if (i == 1) {
      dailyForecast[i] = {
        ...dailyForecast[i],
        date: 'Tomorrow',
      };
    }
  }
  return dailyForecast;
};

const getWeatherFrom = async (query) => {
  try {
    const response = await fetch(endPoints.forecastWeatherFrom(query), options);
    const data = await response.json();

    const { location, current, forecast } = data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, feelsLike_f, is_day, temp_c, temp_f, wind_mph, wind_kph, wind_dir, pressure_mb, pressure_in, uv } = current;
    const { forecastday } = forecast;
    const { text, icon } = condition;

    const today = new Date(localtime);
    let optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
    const body = {
      current: {
        conditionText: text,
        conditionIcon: icon,
        country,
        localtime: today.toLocaleDateString('en-US', optionsDate),
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: { C: feelslike_c, F: feelsLike_f },
        temperature: { C: temp_c, F: temp_f },
        windSpeed: { K: wind_kph, M: wind_mph },
        windDir: wind_dir,
        pressure: { M: pressure_mb, I: pressure_in },
        uv,
      },
      forecast: formatForecast(forecastday),
    };

    return { ...body };
  } catch (error) {
    console.error(error);
  }
};

const searchLocation = async (query) => {
  try {
    const response = await fetch(endPoints.searchLocation(query), options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getWeatherFrom, searchLocation };
