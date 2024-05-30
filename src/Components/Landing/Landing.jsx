import React, { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import { TiArrowSortedDown } from "react-icons/ti";
import Pagination from "../Pagination/Pagination";

export default function Landing() {
  const BASE_URL='https://api.coingecko.com/api/v3/coins';
  const API_KEY='x_cg_demo_api_key=CG-LzUgXSWpqW5jZqtUzK5rPcrm';
  const [datas, setDatas] = useState([]);
  const [search,setSearch]=useState([]);
  const [searchData , setSearchData]=useState([]);
  const [currency,setCurrency] =useState('USD');
  const [isLoading ,setIsLoading]=useState(true);

  const selectCurrencyHandler = selectText=>{
    setCurrency(selectText);
      }
 

  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}/markets?vs_currency=${currency}&per_page=100&order=market_cap_desc&${API_KEY}` )
    const data = await res.json();
    setDatas(data);
    setSearchData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
    
  }, [currency]);
  useEffect(() => {
    searchHandler();
    
  }, [search]);

  const searchHandler=()=>{
    if(search){

      const coinData=searchData.filter((coin)=>coin.id.toLowerCase().includes(search));
     
      setDatas(coinData)
    }
    else{
      setDatas(datas);
    }
   
    
  }

  return (
    <>
   
    <div className={styles.searchbar}>
    
      <input type="text" placeholder="Search" onChange={ e=>setSearch(e.target.value.toLowerCase().trim()) }/>
      <div className={styles.selection}>
        <span>{currency} <TiArrowSortedDown /></span>
        <ul className={styles.selection__list}>
          <li  className={styles.selection__list__active}  onClick={e=>selectCurrencyHandler(e.target.innerHTML)}>USD</li>
          <li onClick={e=>selectCurrencyHandler(e.target.innerHTML)}>EUR</li>
          <li  onClick={e=>selectCurrencyHandler(e.target.innerHTML)}>PND</li>
        </ul>
      </div>
    </div>
      <div className={styles.container}>
       
        <Pagination currency={currency} data={datas} isLoading={isLoading}/>
      </div> 
    </>
  );
}
