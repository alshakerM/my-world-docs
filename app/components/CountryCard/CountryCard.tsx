import { WorldMap } from '../WorldMap/WorldMap';
import styles from './CountryCard.module.css';
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

export const CountryCard = ({ country }: { country: CountryType }) => {
  const FormattedNumber = formatNumber(country.population);
  return (
    <div className={styles.card}>
      <WorldMap country={country.name} />
      <section className={styles.imgAndTitleSection}>
        <img
          className={styles.cardImage}
          src={country.image}
          alt={`${country.name} flag`}
        />
        <section className={styles.titleTextSection}>
          <h2>{country.name}</h2>
          <p> {country.capital}.</p>
        </section>
      </section>
      <section className={styles.infoSection}>
        <p>
          <strong>Population</strong> {FormattedNumber}.
        </p>
        <p>
          <strong>Spoken languages</strong> {country.languages.join(', ')}.
        </p>
        <p>
          <strong>Religion</strong> {country.religion}.
        </p>
        <p>{country.historySummary}.</p>
        <p>
          <strong>Fun part</strong> {country.joke}.
        </p>
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
