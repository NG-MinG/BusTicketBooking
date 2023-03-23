import React from 'react'
import styles from './TicketHistoryItem.module.css'

export default function TicketHistoryItem(props) {
  return (
    <div className={styles.TicketHistoryItem}>
      <p>{props.value.id}</p>
      <p>{props.value.diemdi}</p>
      <p>{props.value.diemden}</p>
      <p>{props.value.ngay}</p>
      <p>{props.value.gio}</p>
      <p>{props.value.gia}</p>
    </div>
  )
}
