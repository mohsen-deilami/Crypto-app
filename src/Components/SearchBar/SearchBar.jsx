import React, { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({datas , searchHandler}) {
  console.log(searchHandler);
  const [currency,setCurrency] =useState('USD');

  const selectCurrencyHandler = selectText=>{
    setCurrency(selectText);
      }
 
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search" onChange={e=> searchHandler(e.target.value)}/>
      <div className={styles.selection}>
        <span>{currency}</span>
        <ul className={styles.selection__list}>
          <li  className={styles.selection__list__active}  onClick={e=>selectCurrencyHandler(e.target.innerHTML)}>USD</li>
          <li onClick={e=>selectCurrencyHandler(e.target.innerHTML)}>EUR</li>
          <li  onClick={e=>selectCurrencyHandler(e.target.innerHTML)}>PND</li>
        </ul>
      </div>
    </div>
  );
}
