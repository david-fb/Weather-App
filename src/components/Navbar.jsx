import styles from '@styles/Navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={styles['container']}>
      <ul className={styles['container__menu']}>
        <li>Bookmarks</li>
        <li>Home</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}
