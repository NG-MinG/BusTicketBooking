import React, { useState } from 'react'
import styles from './ChangePassword.module.css'
import axios from 'axios'

export default function ChangePassword() {
  const [value, setValue] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleInput = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.patch(process.env.REACT_APP_ipAddress + '/bus/v1/user/changePassword', value).then((res) => {
      console.log('Successfully!!!')
    }).catch(error => {
      console.log(error)
      // let a = error.response.data.message
      // console.log(a)
    })
  }

  return (
    <form className={styles.ChangePassword} onSubmit={handleSubmit}>
      <div className={styles['title']}>
        <p>Mật khẩu hiện tại</p>
        <p>Mật khẩu mới</p>
        <p>Xác nhận mật khẩu mới</p>
      </div>
      <div className={styles['content']}>
        <input name="currentPassword" onChange={() => handleInput} type="password" />
        <input name="newPassword" onChange={() => handleInput} type="password" />
        <input name="confirmPassword" onChange={() => handleInput} type="password" />
      </div>
      <button type='submit'>Lưu</button>
    </form>
  )
}
