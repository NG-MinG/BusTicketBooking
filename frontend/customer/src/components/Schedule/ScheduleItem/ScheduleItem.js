import React from 'react'
import styles from './ScheduleItem.module.css'

export default function ScheduleItem({ diem, value }) {
  return (
    <div className={styles.ScheduleItem}>
      <p>{diem}</p>
      <p>{value.loaixe}</p>
      <p>{value.quangduong}</p>
      <p>{value.thoigianhanhtrinh}</p>
      <button>Đặt vé</button>
    </div>
  )
}
