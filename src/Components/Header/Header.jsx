import React from 'react'
import styles from './Header.module.css'
export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Crypto App</h1>
      <p><a href="#">React Training</a> | React&Vite</p>
    </div>
  )
}
