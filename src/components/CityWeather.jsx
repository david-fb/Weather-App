import Image from 'next/image';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import styles from '@styles/CityWeather.module.scss';

export default function CityWeather({ city }) {
  const { preferences, removeCity } = useContext(AppContext);

  return (
    <li className={styles['container']}>
      <div className={styles['container__location']}>
        <h2 className={styles['container__location__city']}>{city.current.locationName}</h2>
        <h3 className={styles['container__location__country']}>{city.current.country}</h3>
        <p className={styles['container__location__time']}>{city.localtime}</p>
      </div>
      <div className={styles['container__temperature']}>
        <p className={styles['container__temperature__text']}>
          {preferences.unit === 'C' ? city?.current.temperature?.C : city?.current.temperature?.F}
          <span>&#xb0;</span>
        </p>
        <button onClick={() => removeCity(city.url)} className={styles['container__temperature__remove']}>
          X
        </button>
        <figure className={styles['container__temperature__image']}>
          <Image src={`https:${city.current.conditionIcon.replace('64x64', '128x128')}`} alt={city.conditionText} layout="fill" />
        </figure>
      </div>
    </li>
  );
}
