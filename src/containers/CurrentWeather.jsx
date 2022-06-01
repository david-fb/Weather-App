import { useContext, useEffect, useRef } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import FavoriteIcon from '@assets/icons/favorite.svg';
import Loader from 'common/loader';
import styles from '@styles/CurrentWeather.module.scss';

export default function CurrentWeather({ isLoading }) {
  const { weather, setMyCities, preferences, removeCity } = useContext(AppContext);
  const buttonFavoriteRef = useRef(null);

  useEffect(() => {
    if (preferences.myCities.length && weather?.url) {
      const isFavorite = preferences.myCities.some((city) => city === weather.url);
      if (isFavorite) buttonFavoriteRef?.current?.classList.add(styles['active']);
    }
  }, [weather]);

  const toggleAddFavorite = (url) => {
    if (preferences.myCities.includes(url)) {
      buttonFavoriteRef.current.classList.remove(`${styles['zoomAnimation']}`);
      removeCity(url);
      buttonFavoriteRef.current.classList.remove(styles['active']);
    } else {
      buttonFavoriteRef.current.classList.add(`${styles['zoomAnimation']}`);
      setMyCities(url);
      buttonFavoriteRef.current.classList.add(styles['active']);
    }
  };
  return (
    <section className={`${styles['container']} ${weather?.current?.isDay && styles['day']}`}>
      {isLoading ? (
        <Loader isDay={weather?.current?.isDay} />
      ) : (
        <>
          <button onClick={() => toggleAddFavorite(weather?.url)} ref={buttonFavoriteRef} className={`${styles['container__favorite']}`}>
            <Image src={FavoriteIcon} alt="Favorite" layout="fill" />
          </button>
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
