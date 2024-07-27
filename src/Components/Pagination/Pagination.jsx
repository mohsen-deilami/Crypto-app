import React, { useState } from "react";
import styles from "./Pagination.module.css";
import CoinData from "../CoinData/CoinData";
import {RotatingLines} from "react-loader-spinner"
export default function Pagination({ data, currency , isLoading }) {
  let arrayLength=Math.ceil(data.length/15)
  const pageCounts = Array.from(Array(arrayLength).keys());
  const [pageNumber, setpageNumber] = useState(1);
  let endIndex = pageNumber * 15;
  let startIndex = endIndex - 15;

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
<>
    {isLoading  ? 
   <div className={styles.spiner}>

       <RotatingLines />
       </div>
       :(
         <div className={styles.pagination}>
        
      <CoinData datas={data.slice(startIndex, endIndex)} currency={currency} isLoading={isLoading}/>
      <div className={styles.buttons}>
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
       )
      }

 
    </>
      
  );
}
