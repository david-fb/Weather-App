import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/ForecastWeather.module.scss';

export default function ForecastWeather() {
  const { weather } = useContext(AppContext);

  return (
    <div className={styles['wrapper']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#434343"
          fillOpacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section className={styles['container']}>
        <h2 className={styles['container__title']}>Daily Forecast</h2>
        <ul className={styles['container__daily']}>
          {weather?.forecast &&
            Object.entries(weather?.forecast)?.map((item, index) => (
              <li key={`forecast-day-${index}`} className={styles['container__daily__item']}>
                <h3 className={styles['container__daily__item-title']}>Tomorrow</h3>
                <div className={styles['container__daily__item-content']}>
                  <figure className={styles['container__daily__item-content-image']}>
                    <Image src={`https:${item[1].day.condition.icon}`} layout="fill" alt="weather condition" />
                  </figure>
                  <p className={styles['container__daily__item-content-temperature']}>
                    {item[1].day.mintemp_c}&#xb0;/{item[1].day.maxtemp_c}&#xb0;
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
