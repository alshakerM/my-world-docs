import { CountryCard } from '../CountryCard/CountryCard';
import data from '../../../EU-data.json';
import styles from './Homepage.module.css';
import { Hero } from '../Hero/Hero';
import { useState } from 'react';
import { SearchForm } from '../SearchForm/SearchForm';

export const Homepage = () => {
  const countryArray = Object.values(data);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [searchFilterValue, setSearchFilterValue] = useState<string>('');
  const searchedCountry = countryArray.filter(
    (country) => country.name === searchFilterValue
  );
  return (
    <div className={styles.mainContent}>
      <Hero />
      <SearchForm
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        setSearchFilterValue={setSearchFilterValue}
      />
      <div className={styles.cardContainer}>
        {searchedCountry.length > 0 ? (
          <CountryCard country={searchedCountry[0]} />
        ) : (
          countryArray.map((country: any) => (
            <CountryCard country={country} key={country.name} />
          ))
        )}
      </div>
    </div>
  );
};
