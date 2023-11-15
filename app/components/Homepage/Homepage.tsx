import styles from './Homepage.module.css';
import { Hero } from '../Hero/Hero';
import { SearchForm } from '../SearchForm/SearchForm';
import { Header } from '../Header/Header';

export const Homepage = () => (
  <div className={styles.mainContent}>
    <Header />

    <SearchForm />
  </div>
);
