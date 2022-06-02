import { useEffect, useState, useContext } from 'react';
import ListCities from '@containers/ListCities';
import { getWeatherFromList } from '@services/api/weather';
import AppContext from '@context/AppContext';
import styles from '@styles/MyCities.module.scss';

export default function MyCities() {
  const [cities, setCities] = useState([]);
  const { weather, preferences } = useContext(AppContext);
  useEffect(() => {
    if (preferences.loadingCities) return;
    getWeatherFromList(preferences.myCities).then((res) => {
      setCities(res);
    });
  }, [preferences.myCities]);

  return (
    <main className={`${styles['container']} ${weather?.current?.isDay && styles['day']}`}>
      <h1 className={styles['container__title']}>My Cities</h1>
      <ListCities cities={cities} />
    </main>
  );
}
