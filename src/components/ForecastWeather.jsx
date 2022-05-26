import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/ForecastWeather.module.scss';

export default function ForecastWeather() {
  const { weather } = useContext(AppContext);
  console.log(weather.forecast);

  return (
    <section className={styles['container']}>
      <h2>Daily Forecast</h2>
      <ul className={styles['container-daily']}>
        {weather?.forecast &&
          Object.entries(weather?.forecast)?.map((item, index) => (
            <li key={`forecast-day-${index}`}>
              <h3>Tomorrow</h3>
              <div>
                <figure>
                    <Image src={`https:${item[1].day.condition.icon}`} layout="fill"/>
                </figure>
                <p>{item[1].day.avgtemp_c}&#xb0;</p>
                <p>{item[1].day.condition.text}</p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
