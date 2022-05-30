import Loader from 'common/loader';
import styles from '@styles/ForecastLoader.module.scss';
export default function ForecastLoader({ isDay }) {
  return (
    <ul className={styles['container']}>
      <li className={styles['container__item']}>
        <Loader isDay={isDay} />
      </li>
      <li className={styles['container__item']}>
        <Loader isDay={isDay} />
      </li>
      <li className={styles['container__item']}>
        <Loader isDay={isDay} />
      </li>
    </ul>
  );
}
