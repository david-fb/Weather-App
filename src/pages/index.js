import { useEffect, useContext, useState } from 'react';
import { getWeatherFrom } from '@services/api/weather';
import { usePosition } from 'hooks/usePosition';
import AppContext from '@context/AppContext';
import Search from '@components/Search';
import CurrentWeather from '@components/CurrentWeather';
import WeatherFactors from '@components/WeatherFactors';
import ForecastWeather from '@components/ForecastWeather';
import Navbar from '@components/Navbar';
import styles from '@styles/Home.module.scss';

export default function Home() {
  const { preferences, setLocation, setWeather, weather } = useContext(AppContext);
  const { lat, lon } = usePosition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (lat && lon) {
      const locationUser = `${lat},${lon}`;
      setLocation(locationUser);
    }
  }, [lat, lon]);

  useEffect(() => {
    if (!preferences.location) return;
    getWeatherFrom(preferences.location).then((res) => {
      setWeather(res);
      setIsLoading(false);
    });
  }, [preferences.location]);

  return (
    <main className={`${styles.container} ${weather?.current?.isDay && styles['day']}`}>
      <Search />
      <CurrentWeather isLoading={isLoading} />
      <WeatherFactors isLoading={isLoading} />
      <ForecastWeather isLoading={isLoading} />
      <Navbar />
    </main>
  );
}
