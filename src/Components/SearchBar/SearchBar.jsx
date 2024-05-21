import React from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search" />
      <div className={styles.selection}>
        <span>USD</span>
        <ul className={styles.selection__list}>
          <li>EUR</li>
          <li>USD</li>
          <li>PND</li>
        </ul>
      </div>
    </div>
  );
}
