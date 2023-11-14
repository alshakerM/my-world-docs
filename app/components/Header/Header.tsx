import styles from './Header.module.css';
import sideLogo from '../../../public/side-logo.png';
export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logoSection}>
        <img src={sideLogo} className={styles.sideLogo} alt="Website logo" />
        <h3 className={styles.websiteName}>World Culture Unveiled</h3>
      </section>
      <h3 className={styles.poweredByAi}>Powered By AI GPT</h3>
    </header>
  );
};
