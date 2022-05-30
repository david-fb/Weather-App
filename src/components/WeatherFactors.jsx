import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import windIcon from '@assets/icons/wind.svg';
import pressureIcon from '@assets/icons/barometer.svg';
import humidityIcon from '@assets/icons/drop.svg';
import uvIndexIcon from '@assets/icons/uv-index.svg';
import styles from '@styles/WeatherFactors.module.scss';

export default function WeatherFactors() {
  const { weather } = useContext(AppContext);
  return (
    <ul className={styles['container']}>
      <li className={`${styles['container__item']} ${weather?.current?.isDay && styles['day']}`}>
        <h3>Wind</h3>
        <div>
          <figure>
            <Image src={windIcon} layout="fill" alt="wind" />
          </figure>
          <p>{weather?.current?.windSpeed.K} kmh</p>
        </div>
      </li>
      <li className={`${styles['container__item']} ${weather?.current?.isDay && styles['day']}`}>
        <h3>Humidity</h3>
        <div>
          <figure>
            <Image src={humidityIcon} layout="fill" alt="wind" />
          </figure>
          <p>{weather?.current?.humidity}%</p>
        </div>
      </li>
      <li className={`${styles['container__item']} ${weather?.current?.isDay && styles['day']}`}>
        <h3>Pressure</h3>
        <div>
          <figure>
            <Image src={pressureIcon} layout="fill" alt="wind" />
          </figure>
          <p>{weather?.current?.pressure.M} mn</p>
        </div>
      </li>
      <li className={`${styles['container__item']} ${weather?.current?.isDay && styles['day']}`}>
        <h3>UV Index</h3>
        <div>
          <figure>
            <Image src={uvIndexIcon} layout="fill" alt="wind" />
          </figure>
          <p>{weather?.current?.uv}</p>
        </div>
      </li>
    </ul>
  );
}
