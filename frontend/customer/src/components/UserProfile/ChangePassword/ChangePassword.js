import React from 'react'
import styles from './ChangePassword.module.css'

export default function ChangePassword() {
  return (
    <form className={styles.ChangePassword}>
      <div className={styles['title']}>
        <p>Mật khẩu hiện tại</p>
        <p>Mật khẩu mới</p>
        <p>Xác nhận mật khẩu mới</p>
      </div>
      <div className={styles['content']}>
        <input value={12345678} type="password" />
        <input value={12345678} type="password" />
        <input value={12345678} type="password" />
      </div>
      <button>save</button>
    </form>
  )
}
