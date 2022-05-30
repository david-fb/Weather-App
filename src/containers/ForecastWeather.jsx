import { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import DailyForecast from '../components/DailyForecast';
import HourlyForecast from '../components/HourlyForecast';
import ForecastLoader from '../components/ForecastLoader';
import styles from '@styles/ForecastWeather.module.scss';

export default function ForecastWeather({ isLoading }) {
  const { weather } = useContext(AppContext);
  const [isDaily, setIsDaily] = useState(true);

  return (
    <div className={styles['wrapper']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={`${weather?.current?.isDay ? '#192d19' : '#102054'}`}
          fillOpacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section className={`${styles['container']} ${weather?.current?.isDay && styles['day']}`}>
        <div className={styles['container__control']}>
          <button className={`${styles['container__control__title']} ${isDaily && styles['active']}`} onClick={() => setIsDaily(true)}>
            Daily Forecast
          </button>
          <button className={`${styles['container__control__title']} ${!isDaily && styles['active']}`} onClick={() => setIsDaily(false)}>
            Hourly Forecast
          </button>
        </div>
        {isLoading ? <ForecastLoader isDay={weather?.current?.isDay} /> : isDaily ? <DailyForecast daily={weather?.forecast} /> : <HourlyForecast forecast={weather?.forecast} />}
      </section>
    </div>
  );
}
