import Image from 'next/image';
import Loader from '@common/loader';
import styles from '@styles/WeatherFactor.module.scss';

export default function WeatherFactor({ isDay, isLoading, factor }) {
  return (
    <li className={`${styles['container']} ${isDay && styles['day']}`}>
      {isLoading ? (
        <Loader isDay={isDay} />
      ) : (
        <>
          <h3>{factor?.title}</h3>
          <div>
            <figure>
              <Image src={factor?.image} layout="fill" alt={`${factor.title}`} />
            </figure>
            <p>{factor?.value}</p>
          </div>
        </>
      )}
    </li>
  );
}
