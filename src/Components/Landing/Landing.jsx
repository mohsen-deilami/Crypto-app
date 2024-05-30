import React, { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

export default function Landing() {
  const BASE_URL='https://api.coingecko.com/api/v3/coins';
  const API_KEY='x_cg_demo_api_key=CG-LzUgXSWpqW5jZqtUzK5rPcrm';
  const [datas, setDatas] = useState([]);
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
    
  }, [currency ]);


  const searchHandler=searchText=>{
    if(searchText){

      const coinData=searchData.filter((coin)=>coin.id.toLowerCase().includes(searchText));
     console.log(coinData);
      setDatas(coinData)
    }
    else{
      setDatas(datas);
    }
   
  }

  return (
    <>
   <SearchBar selectCurrencyHandler={selectCurrencyHandler} searchHandler={searchHandler}/>
      <div className={styles.container}>
       
        <Pagination currency={currency} data={datas} isLoading={isLoading} />
      </div> 
    </>
  );
}
