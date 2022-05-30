import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Loader from 'common/loader';
import styles from '@styles/CurrentWeather.module.scss';

export default function CurrentWeather({ isLoading }) {
  const { weather } = useContext(AppContext);
  return (
    <section className={`${styles['container']} ${weather?.current?.isDay && styles['day']}`}>
      {isLoading ? (
        <Loader isDay={weather?.current?.isDay} />
      ) : (
        <>
          <div className={styles['container__location']}>
            <p className={styles['container__location__time']}>{weather?.current?.localtime}</p>
            <h1 className={styles['container__location__city']}>{weather?.current?.locationName}</h1>
            <h2 className={styles['container__location__country']}>{weather?.current?.country}</h2>
          </div>
          <div className={styles['container__temperature']}>
            <p className={styles['container__temperature__number']}>
              {weather?.current?.temperature.C}
              <span>&#xb0;C</span>
            </p>
            <p className={styles['container__temperature__text']}>It&apos;s {weather?.current?.conditionText}</p>
          </div>
          <p className={styles['container__feelsLike']}>Feels like: {weather?.current?.feelsLike.C}&#xb0;</p>
        </>
      )}
    </section>
  );
}
