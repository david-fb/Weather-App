import { useEffect, useState, useContext } from 'react';
import ListCities from '@containers/ListCities';
import { getWeatherFromList } from '@services/api/weather';
import AppContext from '@context/AppContext';
import ListCitiesLoader from '@components/ListCitiesLoader';
import styles from '@styles/MyCities.module.scss';

export default function MyCities() {
  const [cities, setCities] = useState([]);
  const { weather, preferences } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (preferences.loadingCities) return;
    if (preferences.myCities.length) {
      getWeatherFromList(preferences.myCities).then((res) => {
        setCities(res);
        setLoading(false);
      });
    } else {
      setCities([]);
      setLoading(false);
    }
  }, [preferences.myCities]);

  return (
    <main className={`${styles['container']} ${weather?.current?.isDay && styles['day']}`}>
      <h1 className={styles['container__title']}>My Cities</h1>
      {loading ? <ListCitiesLoader /> : <ListCities cities={cities} />}
      {!preferences.myCities.length && !loading && <p>No cities added</p>}
    </main>
  );
}
