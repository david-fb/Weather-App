import CityWeather from '@components/CityWeather';
import styles from '@styles/ListCities.module.scss';
export default function ListCities({ cities }) {
  return (
    <ul className={styles['container']}>
      {cities.map((city, index) => (
        <CityWeather key={`city-${index}`} city={city} />
      ))}
    </ul>
  );
}
