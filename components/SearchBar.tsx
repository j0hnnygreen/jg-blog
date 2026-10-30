"use client";

import { useRef } from "react";
import { SearchIcon, CloseIcon } from "./icons";
import styles from "../styles/Search.module.css";

export default function SearchBar({
  filterText,
  onFilterTextChange,
  placeholder = "Search…",
}: {
  filterText: string;
  onFilterTextChange: (value: string) => void;
  placeholder?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={styles.searchWrap}
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className={styles.searchBox}>
        <span className={styles.searchIcon}>
          <SearchIcon />
        </span>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="search"
          placeholder={placeholder}
          value={filterText}
          onChange={(event) => onFilterTextChange(event.target.value)}
          aria-label={placeholder}
        />
        {filterText.length > 0 && (
          <button
            type="button"
            className={styles.clearBtn}
            aria-label="Clear search"
            onClick={() => {
              onFilterTextChange("");
              inputRef.current?.focus();
            }}
          >
            <CloseIcon size={14} />
          </button>
        )}
      </div>
    </form>
  );
}
