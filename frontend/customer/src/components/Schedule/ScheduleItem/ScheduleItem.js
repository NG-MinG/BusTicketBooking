import React from 'react'
import styles from './ScheduleItem.module.css'



export default function ScheduleItem({ diem, value }) {
  function toHoursAndMinutes(totalSeconds) {
    const minutes = totalSeconds % 60;
    const hours = Math.floor(totalSeconds / 3600);

    return minutes > 0 ? `${hours}h${padTo2Digits(minutes)}` : `${hours}h`;
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  return (
    <div className={styles.ScheduleItem}>
      <p>{diem}</p>
      <p>{value.bus_type}</p>
      <p>{parseFloat(value.distance) / 1000}km</p>
      <p>{toHoursAndMinutes(parseFloat(value.duration))}</p>
      <button>Đặt vé</button>
    </div>
  )
}
