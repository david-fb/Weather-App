import Image from 'next/image';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import styles from '@styles/CityWeather.module.scss';

export default function CityWeather({ city }) {
  const { preferences, removeCity, setLocation } = useContext(AppContext);
  const router = useRouter();

  const handleClick = () => {
    setLocation(city.url);
    router.push('/');
  };

  return (
    <li className={styles['wrapper']}>
      <div className={styles['container']} onClick={handleClick} onKeyUp={handleClick} role="button" tabIndex={0}>
        <div className={styles['container__location']}>
          <h2 className={styles['container__location__city']}>{city.current.locationName}</h2>
          <h3 className={styles['container__location__country']}>{city.current.country}</h3>
          <p className={styles['container__location__time']}>{city.current.localtime}</p>
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
      </div>
    </li>
  );
}
