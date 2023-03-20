import styles from "./Ticket.module.css";
import {ReactComponent as RightArrowIcon} from "../../assets/svg/TicketBooking/right_arrow.svg";
import {ReactComponent as WaterIcon} from "../../assets/svg/TicketBooking/water.svg";
import {ReactComponent as SleeperIcon} from "../../assets/svg/TicketBooking/sleeper.svg";
import {ReactComponent as WifiIcon} from "../../assets/svg/TicketBooking/wifi.svg";
import {ReactComponent as DotIcon} from "../../assets/svg/TicketBooking/dot.svg";
import {ReactComponent as LocationIcon} from "../../assets/svg/TicketBooking/location.svg";

const Ticket = () => {
    return <div className={styles["ticket"]}>
        <div className={styles["time-travel"]}>
            <span className={styles["start-time"]}>00:01</span>
            <span className={styles["arrow"]}>{<RightArrowIcon/>}</span>
            <span className={styles["end-time"]}>04:01</span>
        </div>
        <div className={styles["features"]}>
            <WaterIcon/>
            <SleeperIcon/>
            <WifiIcon/>
        </div>
        <div className={styles["ticket-details"]}>
            <span className={styles["ticket-price"]}>165.000đ</span>
            <span className={styles["bus-type"]}>
                <span className={styles["Dot-icon"]}><DotIcon/></span>
                <span className={styles["name"]}>Limousine</span>
            </span>
            <span className={styles["left-slots"]}>
                <span className={styles["Dot-icon"]}><DotIcon/></span>
                <span className={styles["status"]}>Còn 9 chỗ</span>
            </span>
        </div>
        <div className={styles["location"]}>
            <LocationIcon/>
            <span className={styles["departure-place"]}>Bến Xe Miền Tây</span>
            <span className={styles["arrival-place"]}>Bến Xe Cần Thơ</span>
            <span className={styles["distance"]}>Xe tuyến: 160km - 4 tiếng</span>
        </div>
    </div>
}

export default Ticket;