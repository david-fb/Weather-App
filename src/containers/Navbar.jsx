import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '@assets/icons/home.svg';
import ListIcon from '@assets/icons/list.svg';
import styles from '@styles/Navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={styles['container']}>
      <ul className={styles['container__menu']}>
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
