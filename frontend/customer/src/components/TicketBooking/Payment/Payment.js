import styles from "./Payment.module.css"
import StepLine from "../StepLine/StepLine";
import {ReactComponent as BackIcon} from  "../../../assets/svg/TicketBooking/back_arrow.svg"
import {ReactComponent as NextIcon} from  "../../../assets/svg/TicketBooking/next_arrow.svg"
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { setTicketBookingDetails } from "../../../store/reducers/ticketBookingSlice";

const Payment = (props) => {
    const dispatch = useDispatch();
    const ticketBookingDetails = useSelector((state) => state.ticketBooking.ticketBookingDetails);
    const guestInfo = useSelector((state) => state.ticketBooking.guestInfo);

    const processBackBtn = () => {
        props.onSetStep({
            stepThree: true,
            stepFour: false,
        })
    }

    return <>
     <div className = {styles["nav-bar"]}>
            This is navbar
    </div>
    <div className={styles["main-content"]}>
        <StepLine currentStep = {props.currentStep}/>
        <div className={styles["btn-wrapper"]}>
            <button className={styles["back-to-previous"]}  onClick = {processBackBtn}>
                <span className={styles[""]}><BackIcon className = {styles["back-icon"]}/></span>
                <span className={styles["content"]}>Quay lại</span>
            </button>
            <button className={styles["continue"]}>
                <span className={styles["content"]}>Tiếp tục</span>
                <span className={styles[""]}><NextIcon className = {styles["next-icon"]}/></span>
            </button>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
}

export default Payment;