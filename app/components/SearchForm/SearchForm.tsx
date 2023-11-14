import type { FC } from 'react';
import styles from './SearchForm.module.css';

interface Props {
  setSearchFilterValue: (value: string) => void;
  searchInputValue: string;
  setSearchInputValue: (value: string) => void;
}
export const SearchForm: FC<Props> = ({
  setSearchFilterValue,
  searchInputValue,
  setSearchInputValue,
}) => {
  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
        setSearchFilterValue(searchInputValue);
      }}
    >
      <input
        type="text"
        placeholder="Search by country"
        onChange={(e) => setSearchInputValue(e.currentTarget.value)}
        className={styles.searchField}
      />
      <button className={styles.submitButton}>Search</button>
    </form>
  );
};
