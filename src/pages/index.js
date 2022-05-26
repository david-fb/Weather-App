import { useEffect, useContext } from 'react';
import { getWeatherFrom } from '@services/api/weather';
import { usePosition } from 'hooks/usePosition';
import AppContext from '@context/AppContext';
import Search from '@components/Search';
import CurrentWeather from '@components/CurrentWeather';
import ForecastWeather from '@components/ForecastWeather';
import Navbar from '@components/Navbar';
import styles from '@styles/Home.module.scss';

export default function Home() {
  const { preferences, setLocation, setWeather } = useContext(AppContext);
  const { lat, lon, error } = usePosition();

  useEffect(() => {
    if (lat && lon) {
      const locationUser = `${lat},${lon}`;
      setLocation(locationUser);
    }
  }, [lat, lon]);

  useEffect(() => {
    if (!preferences.location) return;
    getWeatherFrom(preferences.location).then((res) => setWeather(res));
  }, [preferences.location]);

  return (
    <main className={styles.container}>
      <Search />
      <CurrentWeather />
      <ForecastWeather />
      <Navbar />
    </main>
  );
}
