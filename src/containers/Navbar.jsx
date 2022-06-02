import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePosition } from '@hooks/usePosition';
import AppContext from '@context/AppContext';
import { useContext } from 'react';
import HomeIcon from '@assets/icons/home.svg';
import ListIcon from '@assets/icons/list.svg';
import LocationIcon from '@assets/icons/location.svg';
import styles from '@styles/Navbar.module.scss';
export default function Navbar() {
  const { setLocation } = useContext(AppContext);
  const { lat, lon, error } = usePosition();
  const router = useRouter();
  const handleClick = () => {
    if (error) alert('geolocation permissions needed');
    if (!lat && !lon) return;
    setLocation(`${lat},${lon}`);
    router.push('/');
  };
  return (
    <nav className={styles['container']}>
      <ul className={styles['container__menu']}>
        <li>
          <button onClick={handleClick} className={styles['container__menu__item-button']}>
            <figure className={styles['container__menu__item__image']}>
              <Image src={LocationIcon} layout="fill" alt="location" />
            </figure>
            My Position
          </button>
        </li>
        <li>
          <Link href="/">
            <a href="home" className={styles['container__menu__item']}>
              <figure className={styles['container__menu__item__image']}>
                <Image src={HomeIcon} layout="fill" alt="home" />
              </figure>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/mycities">
            <a href="mycities" className={styles['container__menu__item']}>
              <figure className={styles['container__menu__item__image']}>
                <Image src={ListIcon} layout="fill" alt="list" />
              </figure>
              My Cities
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
