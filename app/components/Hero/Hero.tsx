import styles from './Hero.module.css';
import logo from '../../../public/logo.png';
export const Hero = () => (
  <section className={styles.heroSection}>
    <p className={styles.heroText}>
      Welcome to World Culture Unveiled, your gateway to the diverse world of
      planet earth countries and their captivating histories. Embark on a
      journey through the heart of the planet, where each nation has a unique
      story to tell. Our website is your one-stop destination for discovering
      fascinating facts, cultural insights, and historical narratives about the
      world countries.
    </p>
    <img src={logo} alt="Website logo" className={styles.earthImage} />
  </section>
);
