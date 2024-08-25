import React, { useState } from "react";
import styles from "./CoinData.module.css";
import downChart from "./../../assets/chart-down.svg";
import upChart from "./../../assets/chart-up.svg";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

import Chart from "../Charts/Chart";



export default function CoinData({ datas, currency  }) {
  const [showChart, setShowChart] = useState(false);
  const [coinHistory, setCoinHistory] = useState(null);
  const [type,setType]=useState('prices');
  
  const BASE_URL = "https://api.coingecko.com/api/v3/coins";
  const API_KEY = "x_cg_demo_api_key=CG-LzUgXSWpqW5jZqtUzK5rPcrm";
 
  const showCoinInfos = async (data) => {
    let coinName=data.id;
    try {
      const res = await fetch(
        `${BASE_URL}/${coinName}/market_chart?vs_currency=${currency}&days=7&${API_KEY}`
      );
      const coinHistory = await res.json();
      setCoinHistory({...coinHistory ,coin:data});
    } catch (error) {
      setCoinHistory(null);
    }
  };

  return (
    <>
      <div className={styles.container}>
     {datas.length ? (
        <table className={styles.table}>
          <thead>
            <tr >
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total Volume</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
           
           { datas.map((data) => (
                  <tr  key={data.id}>
                      <td   onClick={() => { showCoinInfos(data); setShowChart(true); }} >
                    <div>
                      <i>
                        <img className={styles.icon} src={data.image} alt="" />
                      </i>
                      {data.symbol}
                    </div>
                    </td>
                  <td  onClick={() => {
                        showCoinInfos(data.id);
                        setChartInfo(true);
                      }}>
                      {data.name}{" "}
                  </td>

                    <td>
                      {currency === "USD" ? " $ " :  " "}
                      {currency === "EUR" ? " € " :  " "}
                      {currency === "JPY" ?  `"Y" ` :  " "}
                      {data.current_price.toLocaleString()}
                    </td>

                    <td
                      className={
                        data.price_change_24h < 0   ?  styles.success 
                          : styles.warning
                      }
                    >
                      {data.price_change_24h < 0 ? (
                        <FaArrowDownLong style={{ marginRight: "5px" }} />
                      ) : (
                        <FaArrowUp style={{ marginRight: "5px" }} />
                      )}
                      {data.price_change_24h.toFixed(2)} %
                    </td>

                    <td>${data.market_cap.toLocaleString()}</td>

                    <td>
                      {data.price_change_percentage_24h > 0 ? (
                        <img src={upChart} />
                      ) : (
                        <img src={downChart} />
                      )}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>

     ) :(
      <h2>There is no Data for your search...</h2>
     )}
             {
              !!showChart &&
               <Chart  dataChart={coinHistory}  type={type} setType={setType} setShowChart={setShowChart} />
             } 

       
      </div>
    </>
  );
}
