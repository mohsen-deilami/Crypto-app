import React, { useState } from "react";
import styles from "./CoinData.module.css";
import downChart from "./../../assets/chart-down.svg";
import upChart from "./../../assets/chart-up.svg";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import Modal from "../Modal/Modal";

export default function CoinData({ datas, currency  }) {
  const [showModal, setShowModal] = useState(false);
  const [coinInfo, setCoinInfo] = useState([]);
 
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const showCoinInfos = async (id) => {
    const res = await fetch(
      `https://pro-api.coingecko.com/api/v3/coins/${id}/history`,
      {
        headers: {
          accept: "application/json",
          x_cg_demo_api_key: "CG-LzUgXSWpqW5jZqtUzK5rPcrm",
        },
      }
    );

    const data = await res.json();
    setCoinInfo(data);
  };

  return (
    <>
      <div className={styles.container}>
     
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
           
           { datas.map((data, index) => (
                  <tr  key={data.id}>
                      <td
                      onClick={() => {
                        showCoinInfos(data.id);
                        setShowModal(true);
                      }}
                    >
                    <div>
                      <i>
                        <img className={styles.icon} src={data.image} alt="" />
                      </i>
                      {data.symbol}
                    </div>
                    </td>
                  <td  onClick={() => {
                        showCoinInfos(data.id);
                        setShowModal(true);
                      }}>

                      {data.name}{" "}
                  </td>

                    <td>
                      {currency === "USD" ? "$" : ""}{" "}
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
              
     

        {showModal && <Modal data={coinInfo} closeModal={closeModalHandler} />}
      </div>
    </>
  );
}
