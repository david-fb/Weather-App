import styles from '@styles/Loader.module.scss';
export default function Loader({ isDay }) {
  return <div className={`${styles.container} ${styles.loading} ${isDay && styles.day}`}></div>;
}
