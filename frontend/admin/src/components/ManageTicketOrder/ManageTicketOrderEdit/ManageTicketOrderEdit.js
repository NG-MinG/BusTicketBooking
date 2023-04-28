import React, { useState } from 'react'
import styles from './ManageTicketOrderEdit.module.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import Seat from './Seat/Seat'
import Status from './Status/Status'

export default function ManageTicketOrderEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  // const { data } = location.state;
  console.log(location.state)
  const [information, setInformation] = useState(location.state)

  const [choosingSeats, setChoosingSeats] = useState([]);
  const [price, setPrice] = useState(0);
  const chooseSeat = (seatID) => {
    return setChoosingSeats((pre) => {
      if (pre.includes(seatID)) {
        setPrice((pre) => pre - 150000)
        return pre.filter((el, index) => el !== seatID);
      }
      setPrice((pre) => pre + 150000)
      return [...pre, seatID];
    })
  }


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
            <input value={information.ten} />
            <input value={information.sodienthoai} />
            <input value={information.gio + " " + information.ngay} />
            <input value={"1647 Phạm Thế Hiển"} />
            <input value={information.diemdi} />
            <input value={information.diemden} />
            <p>3</p>
            <p>B12 B15 B16</p>
          </div>
        </div>
        <div className={styles["layout-seat"]}>
          <div className={styles["layout-seat-title"]}>
            <div className={styles["below"]}>Tầng dưới</div>
            <div className={styles["above"]}>Tầng trên</div>
          </div>
          <div className={styles["seat-tables"]}>
            <div className={styles["seat-table-container"]}>
              <table className={styles["seat-table"]}>
                <tbody>
                  <tr>
                    <td><Seat color="#737B83" seatID="A01" isChoosing={choosingSeats.includes("A01")} onChooseSeat={chooseSeat} /></td>
                    <td className={styles["empty-seat-space"]}><Seat color="#737B83" /></td>
                    <td><Seat color="#737B83" seatID="A02" isChoosing={choosingSeats.includes("A02")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="A03" isChoosing={choosingSeats.includes("A03")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="A04" isChoosing={choosingSeats.includes("A04")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="A05" isChoosing={choosingSeats.includes("A05")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="A06" isChoosing={choosingSeats.includes("A06")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="A07" isChoosing={choosingSeats.includes("A07")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="A08" isChoosing={choosingSeats.includes("A08")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="A09" isChoosing={choosingSeats.includes("A09")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="A10" isChoosing={choosingSeats.includes("A10")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="A11" isChoosing={choosingSeats.includes("A11")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="A12" isChoosing={choosingSeats.includes("A12")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="A13" isChoosing={choosingSeats.includes("A13")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="A14" isChoosing={choosingSeats.includes("A14")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="A15" isChoosing={choosingSeats.includes("A15")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="A16" isChoosing={choosingSeats.includes("A16")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="A17" isChoosing={choosingSeats.includes("A17")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles["seat-table-container"]}>
              <table className={styles["seat-table"]}>
                <tbody>
                  <tr>
                    <td><Seat color="#737B83" seatID="B01" isChoosing={choosingSeats.includes("B01")} onChooseSeat={chooseSeat} /></td>
                    <td className={styles["empty-seat-space"]}><Seat color="#737B83" /></td>
                    <td><Seat color="#737B83" seatID="B02" isChoosing={choosingSeats.includes("B02")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="B03" isChoosing={choosingSeats.includes("B03")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="B04" isChoosing={choosingSeats.includes("B04")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="B05" isChoosing={choosingSeats.includes("B05")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="B06" isChoosing={choosingSeats.includes("B06")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="B07" isChoosing={choosingSeats.includes("B07")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="B08" isChoosing={choosingSeats.includes("B08")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="B09" isChoosing={choosingSeats.includes("B09")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="B10" isChoosing={choosingSeats.includes("B10")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="B11" isChoosing={choosingSeats.includes("B11")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="B12" isChoosing={choosingSeats.includes("B12")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="B13" isChoosing={choosingSeats.includes("B13")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="B14" isChoosing={choosingSeats.includes("B14")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                  <tr>
                    <td><Seat color="#737B83" seatID="B15" isChoosing={choosingSeats.includes("B15")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="red" seatID="B16" isChoosing={choosingSeats.includes("B16")} onChooseSeat={chooseSeat} /></td>
                    <td><Seat color="#737B83" seatID="B17" isChoosing={choosingSeats.includes("B17")} onChooseSeat={chooseSeat} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles["notes"]}>
            <div className={styles["status"]}>
              <span className={styles["color-indicate"]}><Status color="#C0C6CC" /></span>
              <span className={styles["description"]} style={{ color: "#737B83", fontWeight: 500 }}>Trống</span>
            </div>
            <div className={styles["status"]}>
              <span className={styles["color-indicate"]}><Status color="#417DD8" /></span>
              <span className={styles["description"]} style={{ color: "#417DD8", fontWeight: 500 }}>Đang chọn</span>
            </div>
            <div className={styles["status"]}>
              <span className={styles["color-indicate"]}><Status color="#FF0000" /></span>
              <span className={styles["description"]} style={{ color: "#FF0000", fontWeight: 500 }}>Đã đặt</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.save}>Lưu</button>

    </div>
  )
}
