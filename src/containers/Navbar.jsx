import Link from 'next/link';
import styles from '@styles/Navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={styles['container']}>
      <ul className={styles['container__menu']}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/mycities">My Cities</Link>
        </li>
      </ul>
    </nav>
  );
}
