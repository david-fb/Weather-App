import styles from '@styles/DailyForecast.module.scss';
import Image from 'next/image';

export default function DailyForecast({ daily }) {
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
              {item.day.mintemp_c}&#xb0;/{item.day.maxtemp_c}&#xb0;
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
