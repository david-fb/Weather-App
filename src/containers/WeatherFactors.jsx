import { useContext, useState, useEffect } from 'react';
import AppContext from '@context/AppContext';
import windIcon from '@assets/icons/wind.svg';
import pressureIcon from '@assets/icons/barometer.svg';
import humidityIcon from '@assets/icons/drop.svg';
import uvIndexIcon from '@assets/icons/uv-index.svg';
import WeatherFactor from '@components/WeatherFactor';
import styles from '@styles/WeatherFactors.module.scss';

const factorsInitial = [
  {
    title: 'Wind',
    value: 0,
    image: windIcon,
  },
  {
    title: 'Pressure',
    value: 0,
    image: pressureIcon,
  },
  {
    title: 'Humidity',
    value: 0,
    image: humidityIcon,
  },
  {
    title: 'UV Index',
    value: 0,
    image: uvIndexIcon,
  },
];

export default function WeatherFactors({ isLoading }) {
  const [factors, setFactors] = useState(factorsInitial);
  const { weather, preferences } = useContext(AppContext);

  useEffect(() => {
    if (weather.current) {
      const { windSpeed, pressure, humidity, uv } = weather.current;

      const body = [
        {
          title: 'Wind',
          value: `${preferences.speed === 'K' ? `${windSpeed.K} km/h` : `${windSpeed.M} mph`}`,
          image: windIcon,
        },
        {
          title: 'Pressure',
          value: `${preferences.pressure === 'M' ? `${pressure.M} mb` : `${pressure.I} in`} `,
          image: pressureIcon,
        },
        {
          title: 'Humidity',
          value: `${humidity}%`,
          image: humidityIcon,
        },
        {
          title: 'UV Index',
          value: `${uv}`,
          image: uvIndexIcon,
        },
      ];

      setFactors(body);
    }
  }, [weather, preferences]);
  return (
    <ul className={styles['container']}>
      {factors.map((factor, index) => (
        <WeatherFactor key={`weather-factor-${index}`} isDay={weather?.current?.isDay} isLoading={isLoading} factor={factor} />
      ))}
    </ul>
  );
}
