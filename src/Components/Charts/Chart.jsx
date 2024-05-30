import React from 'react'
import {ResponsiveContainer , LineChart, Line  , XAxis , Tooltip ,YAxis} from 'recharts'; 
import styles from './Chart.module.css'
export default function Chart({title ,  dataChart, dataKey}) {
 
    
    
  return (
    <div className={styles.myClass}>
    <h3 className='chart__title'>{title}</h3>
    <ResponsiveContainer width='100%' aspect={5}>
      <LineChart data={dataChart}>
        <XAxis dataKey="name" stroke='#5550bd'/>
        <YAxis/>   
      <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
      <Tooltip/>
      
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
