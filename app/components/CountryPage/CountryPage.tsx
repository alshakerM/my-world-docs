import { CountryCard } from '../CountryCard/CountryCard';
import { Header } from '../Header/Header';
import styles from './CountryPage.module.css';

type CountryType = {
  name: string;
  population: number;
  languages: string[];
  historySummary: string;
  joke: string;
  capital: string;
  religion: string;
  image: string;
};

export const CountryPage = ({ country }: { country: CountryType }) => (
  <div className={styles.mainContent}>
    <Header />

    <CountryCard country={country} />
  </div>
);
