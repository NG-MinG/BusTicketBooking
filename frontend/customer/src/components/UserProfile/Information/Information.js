import React from 'react'
import styles from './Information.module.css'

export default function Information() {
  return (
    <div className={styles['Information']}>
      <div className={styles['title']}>
        <p>Họ và tên:</p>
        <p>Số điện thoại:</p>
        <p>Email:</p>
        <p>Ngày sinh:</p>
        <p>Giới tính:</p>
        <p>Địa chỉ:</p>
      </div>
      <div className={styles['content']}>
        <p>Đinh Nguyễn Duy Khang</p>
        <p>0976975548</p>
        <p>khangduy017@gmail.com</p>
        <p>21/04/2002</p>
        <p>Nam</p>
        <p>1647 Phạm Thế Hiển, phường 6, quận 8</p>
      </div>
      <div className={styles['avatar']}>
        <img alt="" src='' />
      </div>
    </div>
  )
}
