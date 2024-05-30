import React from 'react'
import  ReactDOM  from 'react-dom';
import styles from './Modal.module.css'
import Chart from '../Charts/Chart';
export default function Modal({data , closeModal}) {
    const modalInfos=document.getElementById('modalParent');
    console.log(data);
  return ReactDOM.createPortal(
    <div className={styles.modal__parent}>
        <div>
        {/*  <Chart   title={data.id} dataChart={data} dataKey="ath"  /> */}

      <p>{data.id}</p>
      <button onClick={closeModal}>Close</button>
        </div>
    </div>
    ,
    modalInfos
  )
}
