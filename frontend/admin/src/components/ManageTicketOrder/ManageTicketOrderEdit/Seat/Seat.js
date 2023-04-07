import styles from "./Seat.module.css";
import { ReactComponent as SeatIcon } from "../../../../assets/svg/ManageTicket/seat.svg";


const Seat = (props) => {
  return (<div className={styles["seat"]} onClick={() => props.onChooseSeat(props.seatID)}>
    <SeatIcon className={styles["seat-icon"]} style={{ fill: props.isChoosing ? "#417DD8" : props.color }} />
    <span className={styles["seat-id"]} style={{ color: props.isChoosing ? "#417DD8" : props.color }}>{props.seatID}</span>
  </div>)
}

export default Seat;