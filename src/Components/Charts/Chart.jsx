import React from "react";
import {ResponsiveContainer, LineChart, Line, Legend, CartesianGrid, XAxis, Tooltip, YAxis} from "recharts";
import styles from "./Chart.module.css";

import { convertData } from "../../helpers";
export default function Chart({ dataChart,  type,  setType,  setShowChart}) {
 const setTypeHandler=e=>{
  if(e.target.tagName=== 'BUTTON'){
    setType(e.target.innerText.toLowerCase().replace(" ","_"));
  }
 }

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setShowChart(null)}>
        x
      </span>
      <div className={styles.charts}>
        {dataChart ? (
<>
        <div className={styles.chart__title}>
          <img src={dataChart.coin.image} alt="" />
          <h3>{dataChart.coin.name}</h3>
        </div>

          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={convertData(dataChart, type)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <Line
                  type="monotone"
                  dataKey={type}
                  stroke="#3874ff"
                  strokkeWidth="2px"
                />
                <CartesianGrid stroke="#404042" />
                <YAxis dataKey={type} domain={["auto", "auto"]} />

                <Legend />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          </>
        ) : (
          ""
        )}
        <div className={styles.buttons} onClick={setTypeHandler}>
          <button className={type === 'prices' ? styles.active__btn : null} >Prices</button>
          <button className={type === 'market_caps' ? styles.active__btn : null} >Market Caps</button>
          <button className={type === 'total_volumes' ? styles.active__btn : null} >  Total Volumes   </button>
        </div>
        {dataChart ? (
        <div className={styles.infos}>
          <div>
            <p>Price : </p>
            <span>${dataChart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH : </p>
            <span>${dataChart.coin.ath}</span>
          </div>
          <div>
            <p>Markket Caps : </p>
            <span>{dataChart.coin.market_cap}</span>
          </div>
        </div>

        ):('')}
        
      </div> 
    </div>
  );
}
