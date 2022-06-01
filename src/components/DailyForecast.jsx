import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/DailyForecast.module.scss';

export default function DailyForecast({ daily }) {
  const { preferences } = useContext(AppContext);
  return (
    <ul className={styles['container']}>
      {daily?.map((item, index) => (
        <li key={`forecast-day-${index}`} className={styles['container__item']}>
          <h4 className={styles['container__item-title']}>{item.date}</h4>
          <div className={styles['container__item-content']}>
            <figure className={styles['container__item-content-image']}>
              <Image src={`https:${item.day.condition.icon}`} layout="fill" alt="weather condition" />
            </figure>
            <p className={styles['container__item-content-temperature']}>
              {preferences.unit === 'C' ? item.day.mintemp_c : item.day.mintemp_f}&#xb0;/{preferences.unit === 'C' ? item.day.maxtemp_c : item.day.maxtemp_f}&#xb0;
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
