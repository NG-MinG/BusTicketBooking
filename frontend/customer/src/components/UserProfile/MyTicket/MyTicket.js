import React, { useState } from 'react'
import styles from './MyTicket.module.css'
import MyTicketItem from './MyTicketItem/MyTicketItem'

export default function MyTicket() {
  const [tickets, setTickets] = useState(
    [{
      id: '1',
      diemdi: 'TP. Hồ Chí Minh',
      diemden: 'Nha Trang',
      ngaydi: '14/05/2023',
      giodi: '13h30',
      tenhanhkhach: 'Đinh Nguyễn Duy Khang',
      soluongghe: '3',
      soghe: 'B14 B15 B16',
      sodienthoai: '0976975548',
      gia: '192.000đ',
      noinhanve: '135A Trần Hưng Đạo, phường Bến Nghé, quận 1'
    },
    {
      id: '2',
      diemdi: 'TP. Hồ Chí Minh',
      diemden: 'Nha Trang',
      ngaydi: '14/05/2023',
      giodi: '13h30',
      tenhanhkhach: 'Đinh Nguyễn Duy Khang',
      soluongghe: '3',
      soghe: 'B14 B15 B16',
      sodienthoai: '0976975548',
      gia: '192.000đ',
      noinhanve: '135A Trần Hưng Đạo, phường Bến Nghé, quận 1'
    },
    {
      id: '3',
      diemdi: 'TP. Hồ Chí Minh',
      diemden: 'Nha Trang',
      ngaydi: '23/04/2023',
      giodi: '13h30',
      tenhanhkhach: 'Đinh Nguyễn Duy Khang',
      soluongghe: '3',
      soghe: 'B14 B15 B16',
      sodienthoai: '0976975548',
      gia: '192.000đ',
      noinhanve: '135A Trần Hưng Đạo, phường Bến Nghé, quận 1'
    },
    {
      id: '4',
      diemdi: 'TP. Hồ Chí Minh',
      diemden: 'Nha Trang',
      ngaydi: '23/03/2023',
      giodi: '13h30',
      tenhanhkhach: 'Đinh Nguyễn Duy Khang',
      soluongghe: '3',
      soghe: 'B14 B15 B16',
      sodienthoai: '0976975548',
      gia: '192.000đ',
      noinhanve: '135A Trần Hưng Đạo, phường Bến Nghé, quận 1'
    },]
  )


  return (
    <div className={styles.MyTicket}>
      <div className={styles.listTicket}>
        {
          tickets.map((item, index) => (
            <MyTicketItem key={item.id} value={item} />
          ))
        }
      </div>
    </div>
  )
}
