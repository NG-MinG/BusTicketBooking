import React from 'react'
import styles from './TicketHistory.module.css'
import TicketHistoryItem from './TicketHistoryItem/TicketHistoryItem'

export default function TicketHistory() {

  const ticketHistory = [
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
    {
      id: 'HCMBT',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ'
    },
  ]

  return (
    <div className={styles.TicketHistory}>
      <div className={styles.header}>
        <p>#</p>
        <p>Điểm đi</p>
        <p>Điểm đến</p>
        <p>Ngày</p>
        <p>Giờ</p>
        <p>Giá</p>
      </div>
      <div className={styles.listItem}>
        {ticketHistory.map((value, index) => (
          <TicketHistoryItem key={index} value={value} />
        ))
        }
      </div>
    </div>
  )
}
