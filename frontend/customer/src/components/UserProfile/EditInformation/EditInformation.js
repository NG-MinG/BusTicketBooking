import React, { useState } from 'react'
import styles from './EditInformation.module.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function EditInformation() {
  const [name, setName] = useState("Đinh Nguyễn Duy Khang")
  const [phoneNumber, setPhoneNumber] = useState("0976975548")
  const [email, setEmail] = useState("khangduy017@gmail.com")
  const [birthday, setBirthday] = useState("21/04/2002")
  const [gender, setGender] = useState("Nam")
  const [address, setAddress] = useState("1647 Phạm Thế Hiển, phường 6, quận 8")

  return (
    <form className={styles.EditInformation}>
      <div className={styles['title']}>
        <p>Họ và tên:</p>
        <p>Số điện thoại:</p>
        <p>Email:</p>
        <p>Ngày sinh:</p>
        <p>Giới tính:</p>
        <p>Địa chỉ:</p>
      </div>
      <div className={styles['content']}>
        {/* <p>Đinh Nguyễn Duy Khang</p>
        <p>0976975548</p>
        <p>khangduy017@gmail.com</p>
        <p>21/04/2002</p>
        <p>Nam</p>
        <p>1647 Phạm Thế Hiển, phường 6, quận 8</p> */}
        <input value={name} />
        <input value={phoneNumber} />
        <input value={email} />
        <input value={birthday} />
        <input value={gender} />
        <input value={address} />
      </div>
      <div className={styles['avatar']}>
        <div className={styles.addIcon}>
          <FontAwesomeIcon icon={faPlus} style={{ color: '#417DD8', fontSize: '3.5rem' }} />
        </div>
        <img alt="" src='' />
      </div>
      <button>
        save
      </button>
    </form>
  )
}
