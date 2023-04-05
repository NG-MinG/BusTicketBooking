import styles from "./ManageTicketOrder.module.css";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ManageTicketOrderItem from "./ManageTicketOrderItem/ManageTicketOrderItem";


const ManageTicketOrder = () => {

  const ticketHistory = [
    {
      id: 'HCMBT',
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
      id: 'HCMBT',
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
      id: 'HCMBT',
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
      id: 'HCMBT',
      ten: 'Khang Dinh',
      sodienthoai: '0976975548',
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      ngay: '31/12/2022',
      gio: '13h30',
      gia: '150.000đ',
      trangthai: 'Đã hủy'
    },
  ]

  return <div className={styles.ManageTicketOrder}>
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
          < ManageTicketOrderItem key={index} value={value} />
        ))}
      </div>
    </div>
  </div>
}

export default ManageTicketOrder;