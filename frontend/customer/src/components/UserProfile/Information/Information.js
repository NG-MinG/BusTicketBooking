import React, { useEffect, useState } from 'react'
import styles from './Information.module.css'
import axios from 'axios'

export default function Information() {

  const [information, setInformation] = useState({
    // name: "Đinh Nguyễn Duy Khang",
    // phoneNumber: "0976975548",
    // email: "khangduy017@gmail.com",
    // birthday: "21/04/2002",
    // gender: "Nam",
    // address: "1647 Phạm Thế Hiển, phường 6, quận 8"
  })


  useEffect(() => {
    axios.get(process.env.REACT_APP_ipAddress + '/bus/v1/user/userProfile').then((res) => {
      setInformation(res.data.data.user)
      console.log(res.data.data.user)
    }).catch(error => {
      console.log(error)
    })
  }, [])

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
        <p>{information.fullname}</p>
        <p>{information.phone}</p>
        <p>{information.email}</p>
        <p>{information.dob}</p>
        <p>{information.gender}</p>
        <p>{information.address}</p>
      </div>
      <div className={styles['avatar']}>
        <img alt="" src='' />
      </div>
    </div>
  )
}
