import React from 'react'
import styles from './ManageTicketOrderEdit.module.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
export default function ManageTicketOrderEdit() {
  const navigate = useNavigate();

  return (
    <div className={styles.ManageTicketOrderEdit}>
      <FontAwesomeIcon onClick={() => navigate("/admin/manage-ticket/ticket-order")} className={styles.icon} icon={faArrowLeft} style={{ alignSelf: "flex-start", cursor: "pointer", fontSize: "3.2rem", color: '#083F73' }} />
      <div className={styles.main}>
        <div className={styles.information}>
          <div className={styles.title}>
            <p>Họ và tên</p>
            <p>Số điện thoại</p>
            <p>Thời gian khởi hành</p>
            <p>Điểm nhận vé</p>
            <p>Điểm khởi hành</p>
            <p>Điểm đến</p>
            <p>Số lượng ghế</p>
            <p>Số ghế</p>
          </div>
          <div className={styles.content}>
            <input value={"Đinh Nguyễn Duy Khang"} />
            <input value={"0976975548"} />
            <input value={"13h 12/01/1992"} />
            <input value={"1647 Phạm Thế Hiển"} />
            <input value={"TP. Hồ Chí Minh"} />
            <input value={"Trà Vinh"} />
            <p>3</p>
            <p>B12 B15 B16</p>
          </div>
        </div>
        <div className={styles.seat}>
          Seat
        </div>
      </div>
      <button>Lưu</button>

    </div>
  )
}
