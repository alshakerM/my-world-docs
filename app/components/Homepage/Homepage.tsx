import { CountryCard } from '../CountryCard/CountryCard';
import data from '../../../EU-data.json';
import styles from './Homepage.module.css';
import { Hero } from '../Hero/Hero';

export const Homepage = () => {
  const countryArray = Object.values(data);
  return (
    <div className={styles.mainContent}>
      <Hero />
      {countryArray.map((country: any) => {
        return <CountryCard country={country} key={country.name} />;
      })}
    </div>
  );
};
