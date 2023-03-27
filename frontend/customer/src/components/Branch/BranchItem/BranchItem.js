import React from 'react'
import styles from './BranchItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function BranchItem({ value }) {
  return (
    <div className={styles.BranchItem}>
      <p className={styles.title}>{value.diem}</p>
      {value.benxe.map((values, index) => (
        <div className={styles.items}>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: '#000', fontSize: '2rem' }} />

            <p>{values.diachi}</p>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#000', fontSize: '1.9rem' }} />

            <p>{values.sodienthoai}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
