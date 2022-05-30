import Image from 'next/image';
import styles from '@styles/HourlyForecast.module.scss';

export default function HourlyForecast({ forecast }) {
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
              <p className={styles['container__item-content-temperature']}>{item.temp_c}&#xb0;</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
