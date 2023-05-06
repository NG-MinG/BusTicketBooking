import styles from "./ManageTicketOrder.module.css";
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ManageTicketOrderItem from "./ManageTicketOrderItem/ManageTicketOrderItem";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import io from 'socket.io-client'



const ManageTicketOrder = () => {

  const ticketHistory = [
    {
      id: 'HCMBT1',
      ten: 'Dinh Nguyen Duy Khang',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đang xử lí'
    },
    {
      id: 'HCMBT2',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã đặt'
    },
    {
      id: 'HCMBT3',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã nhận'
    },
    {
      id: 'HCMBT4',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã hủy'
    },
    {
      id: 'HCMBT5',
      ten: 'Dinh Nguyen Duy Khang',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đang xử lí'
    },
    {
      id: 'HCMBT6',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã đặt'
    },
    {
      id: 'HCMBT7',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã nhận'
    },
    {
      id: 'HCMBT8',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã hủy'
    },
    {
      id: 'HCMBT9',
      ten: 'Dinh Nguyen Duy Khang',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đang xử lí'
    },
    {
      id: 'HCMBT10',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã đặt'
    },
    {
      id: 'HCMBT11',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã nhận'
    },
    {
      id: 'HCMBT12',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã hủy'
    },
    {
      id: 'HCMBT13',
      ten: 'Dinh Nguyen Duy Khang',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đang xử lí'
    },
    {
      id: 'HCMBT14',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã đặt'
    },
    {
      id: 'HCMBT15',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '3h30',
      gia: '150.000đ',
      trangthai: 'Đã nhận'
    },
    {
      id: 'HCMBT16',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '15h30',
      gia: '150.000đ',
      trangthai: 'Đã hủy'
    },
  ]

  const socket = io(process.env.REACT_APP_ipAddress)

  useEffect(() => {
    socket.on("book-ticket", (data) => {
      console.log(data)
    });
  }, [])

  const [detail, setDetail] = useState(false)
  const [currentData, setCurrentData] = useState()
  const navigate = useNavigate()

  const showDetail = (id) => {
    setDetail(true)
    setCurrentData(ticketHistory.filter(el => el.id === id)[0])
  }

  const editData = () => {
    navigate("edit/" + currentData.id, { state: currentData })
  }


  return <div className={styles.ManageTicketOrder}>
    <div className={styles['main-content']}>
      <p className={styles.title}>vé xe đã đặt</p>
      <div className={styles.search}>
        <input placeholder="Tìm kiếm..." />
        <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} style={{ color: '#737B83', fontSize: '2.1rem' }} />
      </div>
      <div className={styles.table}>
        <div className={styles.header}>
          <p>#</p>
          <p>Tên</p>
          <p>Số điện thoại</p>
          <p>Tuyến</p>
          <p>Thời gian</p>
          <p>Trạng thái</p>
        </div>
        <div className={styles.listItem}>
          {ticketHistory.map((value, index) => (
            < ManageTicketOrderItem key={index} value={value} showDetail={showDetail} />
          ))}
        </div>
      </div>
      {detail && <div className={styles.detail}>
        <div onClick={() => setDetail(false)} className={styles.overlay}>
        </div>
        <div className={styles.popup}>
          <FontAwesomeIcon onClick={() => setDetail(false)} className={styles.closeIcon} icon={faXmark} style={{ color: '#083F73', fontSize: '3.6rem' }} />
          <button onClick={editData} className={styles.editBtn}>Sửa</button>
          <div className={styles.left}>
            <p>Tên: {currentData.ten}</p>
            <p>Thời gian đặt vé: 13h20 15/02/2023</p>
            <p>Thời gian khởi hành: {currentData.gio} {currentData.ngay}</p>
            <p>Điểm khởi hành: {currentData.diemdi}</p>
            <p>Điểm nhận vé: abcdhdhd</p>
            <p style={{ color: "#FF0000" }}>Tổng tiền: 134.000đ</p>
          </div>
          <div className={styles.right}>
            <p>Số điện thoại: {currentData.sodienthoai}</p>
            <p>Số lượng ghế: 3</p>
            <p>Số ghế: B3, B4, B5</p>
            <p>Điểm đến: {currentData.diemden}</p>
            <p>Trạng thái: {currentData.trangthai}</p>
          </div>
        </div>
      </div>}
    </div>
  </div>
}

export default ManageTicketOrder;