import {ReactComponent as SeatIcon} from "../../assets/svg/ManageTicket/seat.svg";
import styles from "./Seat.module.css";

const Seat = (props) => {
    return (<div className={styles["seat"]}>
        <SeatIcon className = {styles["seat-icon"]} style = {{fill: props.isChoosing ? "#417DD8" : props.color}}/>
        <span className={styles["seat-id"]} style = {{color: props.isChoosing ? "#417DD8" : props.color}}>{props.seatID}</span>
    </div>)
}

export default Seat;