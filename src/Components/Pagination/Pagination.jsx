import React, { useState } from "react";
import styles from "./Pagination.module.css";
import CoinData from "../CoinData/CoinData";
export default function Pagination({ data, currency }) {
  const pageCounts = Array.from(Array(data.length / 20).keys());
  const [pageNumber, setpageNumber] = useState(1);
  let endIndex = pageNumber * 20;
  let startIndex = endIndex - 20;

  const previousHandler=()=>{
    if(pageNumber > 1 ){
      setpageNumber(pageNumber=>pageNumber-1)
    }
  }
  const nextHandler=()=>{
    
    if(pageNumber-1 !== pageCounts){
      setpageNumber(pageNumber=>pageNumber+1)
    }
  }
  return (
    <div>
      <CoinData datas={data.slice(startIndex, endIndex)} currency={currency} />
      <div className={styles.pagination}>
        <button onClick={previousHandler} className={pageNumber ===1 ? styles.disabled : null}>Previous</button>
        {pageCounts.map((pageCount, index) => (
          <button
          className={
            pageNumber !== pageCount + 1
            ? null
            : styles.number__btn__active
          }
          key={index}
          onClick={() => setpageNumber(pageCount + 1)}
          >
            {pageCount + 1}
          </button>
        ))}
        <button onClick={nextHandler} className={pageNumber+1 > pageCounts.length ? styles.disabled : null}>Next</button>
      </div>
    </div>
  );
}
