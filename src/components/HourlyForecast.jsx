import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/HourlyForecast.module.scss';

export default function HourlyForecast({ forecast }) {
  const { preferences } = useContext(AppContext);
  return (
    <ul className={styles['container']}>
      {forecast?.length &&
        forecast[0].hour?.map((item, index) => (
          <li key={`forecast-hour-${index}`} className={styles['container__item']}>
            <h4 className={styles['container__item-title']}>{item.time}</h4>
            <div className={styles['container__item-content']}>
              <figure className={styles['container__item-content-image']}>
                <Image src={`https:${item.condition.icon}`} layout="fill" alt="weather condition" />
              </figure>
              <p className={styles['container__item-content-temperature']}>{preferences.unit === 'C' ? item.temp_c : item.temp_f}&#xb0;</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
