import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/CurrentWeather.module.scss';

export default function CurrentWeather() {
  const { weather } = useContext(AppContext);
  return (
    <section className={styles['container']}>
      <p>{weather?.current?.localtime}</p>
      <h1 className={styles['container__location']}>{weather?.current?.locationName}</h1>
      <h2 className={styles['container__country']}>{weather?.current?.country}</h2>
      {/* {weather?.current?.conditionIcon && (
        <figure>
          <Image src={`https:${weather?.current?.conditionIcon}`.replace('64x64', '128x128')} alt={weather?.current?.conditionText} layout="fill" />
        </figure>
      )} */}
      <p className={styles['container__temperature']}>{weather?.current?.temperature.C}&#xb0;</p>
      <p>It&apos;s {weather?.current?.conditionText}</p>
      <p>Feels like: {weather?.current?.feelsLike.C}&#xb0;</p>
    </section>
  );
}
