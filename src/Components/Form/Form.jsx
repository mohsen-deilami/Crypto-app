import React from "react";
import styles from "./Form.module.css";
import SearchBar from "../SearchBar/SearchBar";
export default function Form() {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
}
