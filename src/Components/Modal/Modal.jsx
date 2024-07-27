import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Chart from "../Charts/Chart";
import { convertData } from "../../helpers";
export default function Modal({ data, setShowModal }) {
  const modalInfos = document.getElementById("modalParent");
  const [type, setType] = useState("prices");
  console.log(convertData(data, type));
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div>
        <Chart
          datas={data}
          dataChart={convertData(data, type)}
          title={type}
          datkey={type}
        />
        <button onClick={() => setShowModal(null)}>Close</button>
      </div>
    </div>,
    modalInfos
  );
}
