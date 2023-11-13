import React from 'react';
import styles from './CountryCard.module.css';

export const CountryCard = ({ country }: any) => {
  const FormattedNumber = formatNumber(country.population);
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={country.image}
        alt={`${country.name} flag`}
      />
      <section className={styles.infoSection}>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {FormattedNumber}</p>
        <p>Spoken languages: {country.languages}</p>
        <p>Religion: {country.religion}</p>
        <p>{country.historySummary}</p>
        <p>Fun fact: {country.joke}</p>
      </section>
    </div>
  );
};

function formatNumber(number: number) {
  if (number >= 1000000) {
    const rounded = (number / 1000000).toFixed(1);
    return `${rounded} mil`;
  } else if (number >= 1000) {
    const rounded = (number / 1000).toFixed(1);
    return `${rounded} K`;
  } else {
    return number.toString();
  }
}
