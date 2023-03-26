import styles from "./ChooseRoute.module.css"
import Ticket from "../../Ticket/Ticket";
import {useState} from "react";
import StepLine from "../StepLine/StepLine";


const tickets  = [  
    {
        id: '1',
        departure_time: "03-12-2023 00:01",
        arrival_time: "03-12-2023 04:01",
        departure_city: "TP. Hồ Chí Minh",
        arrival_city: "Cần Thơ",
        ticket_type: "round_trip",
        price: "170.000đ",
        travel_time: "4h",
        distance: "160km",
        departure_depot: "Bến Xe Miền Tây",
        arrival_depot: "Bến Xe Cần Thơ",
        reserved_seat: 25,
        total_seat: 34, 
        bus_type: "Limousine"
    },
    {
        id: '2',
        departure_time: "03-12-2023 04:01",
        arrival_time: "03-12-2023 08:01",
        departure_city: "TP. Hồ Chí Minh",
        arrival_city: "Cần Thơ",
        ticket_type: "round_trip",
        price: "150.000đ",
        travel_time: "4h",
        distance: "160km",
        departure_depot: "Bến Xe Miền Tây",
        arrival_depot: "Bến Xe Cần Thơ",
        reserved_seat: 23,
        total_seat: 34, 
        bus_type: "Giường"
    },
    {
        id: '3',
        departure_time: "03-12-2023 08:01",
        arrival_time: "03-12-2023 12:01",
        departure_city: "TP. Hồ Chí Minh",
        arrival_city: "Cần Thơ",
        ticket_type: "round_trip",
        price: "130.000đ",
        travel_time: "4h",
        distance: "160km",
        departure_depot: "Bến Xe Miền Tây",
        arrival_depot: "Bến Xe Cần Thơ",
        reserved_seat: 22,
        total_seat: 34, 
        bus_type: "Ghế"
    }
]

const ChooseRoute = (props) => {
    const [chosenTicket, setChosenTicket] = useState({});
    const chooseTicket = (id) => {
        setChosenTicket(id);
    }

    return <>
        <div className = {styles["nav-bar"]}>
            This is navbar
        </div>
        <div className = {styles["main-content"]}>
            <StepLine currentStep = {props.currentStep}/>
            <div className={styles["reminder"]}>Vui lòng chọn giờ lên xe phù hợp</div>
            <div className={styles["Filter"]}>
                <select name="PriceFilter" id="" className = {styles.priceFilter}>
                    <option value="" disable selected>Giá</option>
                    <option value="LowToHigh">Thấp - Cao</option>
                    <option value="HighToLow">Cao - Thấp</option>
                </select>
                <select name="CarTypeFilter" id="" >
                    <option value="" disable selected>Loại xe</option>
                    <option value="chair">Ghế</option>
                    <option value="sleeper">Giường</option>
                    <option value="limousine">Limousine</option>
                </select>
                <select name="HoursFilter" id="">
                    <option value="" disable selected>Giờ</option>
                    <option value="">0h-6h</option>
                    <option value="">6h-12h</option>
                    <option value="">12h-18h</option>
                    <option value="">18h-24h</option>
                </select>
            </div>
            {
                tickets.map((el, id) => {
                    return <Ticket ticketDetails = {el} dropDown = {chosenTicket === el.id} onChooseTicket = {chooseTicket} onSetStep = {props.onSetStep}/>
                })
            }
            {/* <Ticket/>
            <Ticket/>
            <Ticket/> */}
        </div>
        <div className = {styles["nav-bar"]}>This is footer</div>
    </> 
    
}   


export default ChooseRoute;


// <div className = {styles["step-line-container"]}>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["active-title"]}`}>Chọn tuyến</div>
//                     <div className = {styles["current-step"]}>
//                         <div className={styles.text}>1</div>
//                     </div>
//                 </div>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["active-title"]}`}>Xác nhận lộ trình</div>
//                     <div className = {styles["next-step"]}>
//                         <div className={styles.text}>2</div>
//                     </div>
//                 </div>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["inactive-title"]}`}>Thông tin hành khách</div>
//                     <div className = {styles["empty-step"]}>
//                         <div className={styles.text}>3</div>
//                     </div>
//                 </div>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["inactive-title"]}`}>Thanh toán</div>
//                     <div className = {styles["empty-step"]}>
//                         <div className={styles.text}>4</div>
//                     </div>
//                 </div>
//                 <div className={styles["current-line"]}></div>
//                 <div className={styles["empty-line-1"]}></div>
//                 <div className={styles["empty-line-2"]}></div>
// </div>