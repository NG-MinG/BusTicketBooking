import React from 'react'
import styles from './ManageTicketOrderItem.module.css'
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export default function ManageTicketOrderItem(props) {
  const navigate = useNavigate()
  const editData = () => {
    navigate("edit/" + props.value.id, { state: props.value })
  }
  return (
    <div className={styles.ManageTicketOrderItem}>
      <p>{props.value.id}</p>
      <p>{props.value.ten}</p>
      <p>{props.value.sodienthoai}</p>
      <p>{props.value.diemdi} - {props.value.diemden}</p>
      <p>{props.value.gio} {props.value.ngay}</p>
      <button>Đang xử lí</button>
      <FontAwesomeIcon onClick={() => props.showDetail(props.value.id)} className={styles.icon} icon={faEye} style={{ color: '#1F84BD' }} />
      <FontAwesomeIcon onClick={editData} className={styles.icon} icon={faPenToSquare} style={{ color: '#1F84BD' }} />
      <FontAwesomeIcon className={styles.icon} icon={faTrashCan} style={{ color: '#FB6C6C' }} />
    </div>
  )
}
