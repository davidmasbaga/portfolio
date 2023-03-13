import React from 'react'
import { FaReact } from 'react-icons/fa';
import styles from '@/Components/Home/CarTecno/card.module.css'


function Card(props) {
  return (
    <div className={styles.card}>
        <h3>{props.title}</h3>
        <div>{props.icon}</div>
    </div>
  )
}

export default Card