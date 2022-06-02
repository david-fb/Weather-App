import Loader from '@common/loader';
import styles from '@styles/ListCitiesLoader.module.scss';
import AppContext from '@context/AppContext';
import { useContext } from 'react';
export default function ListCitiesLoader() {
  const { weather, preferences } = useContext(AppContext);
  return (
    <ul className={styles['container']}>
      {preferences?.myCities?.map((city, index) => (
        <li className={styles['container__item']} key={`city-loader-${index}`}>
          <Loader isDay={weather?.current?.isDay} />
        </li>
      ))}
    </ul>
  );
}
