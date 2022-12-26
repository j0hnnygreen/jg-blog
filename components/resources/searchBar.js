import styles from "../../styles/Resources.module.css";

export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div className={styles.searchBox}>
      <svg
        width="22px"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className={styles.searchIcon}
      >
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>

      <input
        className={styles.searchInput}
        type="text"
        placeholder="search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
}
