import React, { useState } from 'react'
import styles from './MyTicketItem.module.css'
import { faCalendarCheck, faClock } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightLong, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyTicketItem(props) {
  const date = new Date()
  var dateParts = props.value.ngaydi.split("/");

  let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  console.log(date)
  console.log(dateObject)

  const [expire, setExpire] = useState(dateObject.getTime() < date.getTime());

  return (
    <div className={styles.MyTicketItem}>
      <div className={styles.top}>
        <div className={styles.route}>
          <p>{props.value.diemdi}</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{ color: '#ffffff', fontSize: '2.6rem' }} />
          <p>{props.value.diemden}</p>
        </div>
        <div className={styles.date}>
          <FontAwesomeIcon icon={faCalendarCheck} style={{ color: '#ffffff', fontSize: '2.6rem' }} />
          <p>{props.value.ngaydi}</p>
        </div>
        <div className={styles.hour}>
          <FontAwesomeIcon icon={faClock} style={{ color: '#ffffff', fontSize: '2.6rem' }} />
          <p>{props.value.giodi}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.name}>
            <p>Tên hành khách:</p>
            <p>{props.value.tenhanhkhach}</p>
          </div>
          <div className={styles.seats}>
            <p>Số lượng ghế:</p>
            <p>{props.value.soluongghe}</p>
          </div>
          <div className={styles.seatName}>
            <p>Số ghế:</p>
            <p>{props.value.soghe}</p>
          </div>
          <div className={styles.ticketPickUp}>
            <p>Nơi nhận vé:</p>
            <p>{props.value.noinhanve}</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.phoneNumber}>
            <p>Số điện thoại:</p>
            <p>{props.value.sodienthoai}</p>
          </div>
          <div className={styles.expense}>
            <p>Giá:</p>
            <p>{props.value.gia}</p>
          </div>
        </div>
        <div className={styles.cancelButton}>
          <FontAwesomeIcon icon={faTrash} style={{ color: '#ffffff', fontSize: '2.1rem' }} />
          <p>hủy chuyến</p>
        </div>
      </div>
      {expire && <div className={styles.expire}></div>}
      {expire && <p className={styles['expire-text']}>Hết hạn</p>}
    </div>
  )
}
