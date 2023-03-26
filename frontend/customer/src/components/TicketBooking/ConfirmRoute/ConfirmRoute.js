import styles from "./ConfirmRoute.module.css";
import StepLine from "../StepLine/StepLine";
import {ReactComponent as LocationIcon} from "../../../assets/svg/TicketBooking/location.svg";
import {ReactComponent as DotIcon} from  "../../../assets/svg/TicketBooking/dot.svg"
import {ReactComponent as EyeIcon} from  "../../../assets/svg/TicketBooking/eye.svg"
import {ReactComponent as BackIcon} from  "../../../assets/svg/TicketBooking/back_arrow.svg"
import {ReactComponent as NextIcon} from  "../../../assets/svg/TicketBooking/next_arrow.svg"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ConfirmRoute = (props) => {
    const ticketBookingDetails = useSelector((state) => state.ticketBooking.ticketBookingDetails)
    const navigate = useNavigate();
    return <>
    <div className = {styles["nav-bar"]}>
            This is navbar
    </div>
    <div className={styles["main-content"]}>
        <StepLine currentStep = {props.currentStep}/>
        <div className={`${styles["ticket"]} ${styles["ticket-active"]}`}>
            <div className={styles["quick-description"]}>
                    <div className={styles["confirm-route-title"]}>Xác nhận lộ trình đi</div>
                    <div className={styles["ticket-details"]}>
                        <span className={styles["ticket-price"]}>{ticketBookingDetails.ticket_price}</span>
                        <span className={styles["bus-type"]}>
                            <span className={styles["Dot-icon"]}><DotIcon/></span>
                            <span className={styles["name"]}>{ticketBookingDetails.bus_type}</span>
                        </span>
                    </div>
                    <div className={styles["location"]}>
                        <LocationIcon/>
                        <span className={styles["departure-place"]}>{ticketBookingDetails.departure_depot}</span>
                        <span className={styles["arrival-place"]}>{ticketBookingDetails.arrival_depot}</span>
                        <span className={styles["distance"]}>Xe tuyến: {ticketBookingDetails.distance} - {ticketBookingDetails.travel_time} tiếng</span>
                    </div>
            </div>
        </div>
        <div className={styles["chosen-seats"]}>
                <div className={styles["seats"]}>
                    <span className={styles["title"]}>Ghế đã chọn</span>
                    <span className={styles["list-seats"]}>{ticketBookingDetails.choosing_seats.map((el, index) => index === ticketBookingDetails.choosing_seats.length - 1 ? `${el}` : `${el}, `)}</span>
                    <span className={styles["watch-btn"]}>
                        <EyeIcon/>
                    </span>
                </div>
        </div>
        <div className={styles["border-line-spacing"]}></div>
        <div className={styles["chosen-depot"]}>
                <div className={styles["depot"]}>
                    <span className={styles["title"]}>Điểm lên xe</span>
                    <select className= {styles["list-depots"]} id="">
                        <option value="" disabled selected>Chọn điểm lên xe</option>
                        <option value="" >Bến Xe Miền tây</option>
                        <option value="" >Đồng Tâm</option>
                    </select>
                </div>
        </div>
        <div className={styles["btn-wrapper"]}>
            <button className={styles["back-to-previous"]}  onClick = {() => props.onSetStep({
                stepOne: true,
                stepTwo: false,
            })}>
                <span className={styles[""]}><BackIcon className = {styles["back-icon"]}/></span>
                <span className={styles["content"]}>Quay lại</span>
            </button>
            <button className={styles["continue"]} onClick = {() => props.onSetStep({
                stepTwo: false,
                stepThree: true,
            })}>
                <span className={styles["content"]}>Tiếp tục</span>
                <span className={styles[""]}><NextIcon className = {styles["next-icon"]}/></span>
            </button>
        </div>
    </div>
</>
}

export default ConfirmRoute;


