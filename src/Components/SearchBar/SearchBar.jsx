import React, { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({searchHandler,selectCurrencyHandler}) {
 


  /* const selectCurrencyHandler = selectText=>{
    setCurrency(selectText);
    console.log(selectText);
      } */
 
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search..." onChange={e=> searchHandler(e.target.value)}/>
      <select  name="" id="" onChange={e=>selectCurrencyHandler(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
   
    </div>
  );
}
