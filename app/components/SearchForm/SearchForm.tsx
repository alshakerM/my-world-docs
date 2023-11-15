import { useState } from 'react';
import styles from './SearchForm.module.css';
import data from '../../../EU-data.json';
import { useNavigate } from '@remix-run/react';

type CountryType = {
  name: string;
  population: number;
  languages: string[];
  historySummary: string;
  joke: string;
  capital: string;
  religion: string;
  image: string;
}[];

function getCountryNames(countryData: CountryType) {
  const countryNames = [];
  for (const country of countryData) {
    if (country.hasOwnProperty('name')) {
      countryNames.push(country.name);
    }
  }
  return countryNames;
}

export const SearchForm = () => {
  const navigate = useNavigate();
  const countryArray = Object.values(data);
  const countryNames = getCountryNames(countryArray);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (countryNames.includes(inputValue)) {
      navigate(`/countries/${inputValue}`);
    }
  };

  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="search"
        list="country-names"
        placeholder="Search by country"
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
          if (countryNames.includes(e.target.value)) {
            navigate(`/countries/${e.target.value}`);
          }
        }}
        className={styles.searchField}
      />
      <datalist id="country-names">
        {countryNames.map((name) => (
          <option value={name} key={name} />
        ))}
      </datalist>
    </form>
  );
};
