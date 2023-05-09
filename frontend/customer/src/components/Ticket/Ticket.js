import styles from "./Ticket.module.css";
import { ReactComponent as RightArrowIcon } from "../../assets/svg/TicketBooking/right_arrow.svg";
import { ReactComponent as WaterIcon } from "../../assets/svg/TicketBooking/water.svg";
import { ReactComponent as SleeperIcon } from "../../assets/svg/TicketBooking/sleeper.svg";
import { ReactComponent as WifiIcon } from "../../assets/svg/TicketBooking/wifi.svg";
import { ReactComponent as DotIcon } from "../../assets/svg/TicketBooking/dot.svg";
import { ReactComponent as LocationIcon } from "../../assets/svg/TicketBooking/location.svg";
import Seat from "../TicketBooking/Seat/Seat.js";
import Status from "../TicketBooking/Seat/Status.js";
import LimousineLayout from "../BusLayout/LimousineLayout/LimousineLayout";
import SleeperLayout from "../BusLayout/SleeperLayout/SleeperLayout";
import ChairLayout from "../BusLayout/ChairLayout/ChairLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTicketBookingDetails } from "../../store/reducers/ticketBookingSlice";


const Ticket = (props) => {
    const [choosingSeats, setChoosingSeats] = useState([]);
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const chooseSeat = (seatID) => {
        return setChoosingSeats((pre) => {
            if (pre.includes(seatID)) {
                setPrice((pre) => pre - parseInt(props.ticketDetails.price.replace(/\D/g, '')))
                return pre.filter((el, index) => el !== seatID);
            }
            setPrice((pre) => pre + parseInt(props.ticketDetails.price.replace(/\D/g, '')))
            return [...pre, seatID];
        })
    }

    const processContinueBtn = () => {
        props.onSetStep({
            stepOne: false,
            stepTwo: true,
        });
        dispatch(setTicketBookingDetails({
            ticket_id: props.ticketDetails._id,
            truncatedDate: props.ticketDetails.truncatedDate,
            departure_time: props.ticketDetails.departure_time,
            arrival_time: props.ticketDetails.arrival_time,
            departure_city: props.ticketDetails.departure_city,
            arrival_city: props.ticketDetails.arrival_city,
            ticket_type: props.ticketDetails.ticket_type,
            price: props.ticketDetails.price,
            travel_time: props.ticketDetails.travel_time,
            distance: props.ticketDetails.distance,
            departure_depot: props.ticketDetails.departure_depot,
            arrival_depot: props.ticketDetails.arrival_depot,
            bus_type: props.ticketDetails.bus_type,
            booked_seats: props.ticketDetails.booked_seats,
            reserved_seats: props.ticketDetails.reserved_seats,
            total_seats: props.ticketDetails.total_seats,
            choosing_seats: choosingSeats,
            total_price: price,
            // ***
            starting_depots: props.startingDepots,
        }))
    }


    return <div className={props.dropDown ? `${styles["ticket"]} ${styles["ticket-active"]}` : styles["ticket"]} onClick={() => { props.onChooseTicket(props.ticketDetails.id) }}>
        <div className={styles["quick-description"]}>
            <div className={styles["time-travel"]}>
                <span className={styles["start-time"]}>{props.ticketDetails.departure_time}</span>
                <span className={styles["arrow"]}>{<RightArrowIcon />}</span>
                <span className={styles["end-time"]}>{props.ticketDetails.arrival_time}</span>
            </div>
            <div className={styles["features"]}>
                <WaterIcon />
                {props.ticketDetails.bus_type !== "Ghế" && <SleeperIcon />}
                <WifiIcon />
            </div>
            <div className={styles["ticket-details"]}>
                <span className={styles["ticket-price"]}>{props.ticketDetails.price}</span>
                <span className={styles["bus-type"]}>
                    <span className={styles["Dot-icon"]}><DotIcon /></span>
                    <span className={styles["name"]}>{props.ticketDetails.bus_type}</span>
                </span>
                <span className={styles["left-slots"]}>
                    <span className={styles["Dot-icon"]}><DotIcon /></span>
                    <span className={styles["status"]}>Còn {props.ticketDetails.total_seats - props.ticketDetails.reserved_seats} chỗ</span>
                </span>
            </div>
            <div className={styles["location"]}>
                <LocationIcon />
                <span className={styles["departure-place"]}>{props.ticketDetails.departure_depot}</span>
                <span className={styles["arrival-place"]}>{props.ticketDetails.arrival_depot}</span>
                <span className={styles["distance"]}>Xe tuyến: {props.ticketDetails.distance} - {props.ticketDetails.travel_time}</span>
            </div>
        </div>
        {props.dropDown &&
            <>
                <div className={styles["layout-seat-description"]}>Vị trí ghế ngồi</div>
                <div className={styles["layout-seat"]}>
                    {props.ticketDetails.bus_type === "Limousine" && <LimousineLayout bookedSeats={props.ticketDetails.booked_seats} choosingSeats={choosingSeats} onChooseSeat={chooseSeat} />}
                    {props.ticketDetails.bus_type === "Giường" && <SleeperLayout bookedSeats={props.ticketDetails.booked_seats} choosingSeats={choosingSeats} onChooseSeat={chooseSeat} />}
                    {props.ticketDetails.bus_type === "Ghế" && <ChairLayout bookedSeats={props.ticketDetails.booked_seats} choosingSeats={choosingSeats} onChooseSeat={chooseSeat} />}
                    {/* <div className={styles["layout-seat-title"]}>
                    <div className={styles["below"]}>Tầng dưới</div>
                    <div className={styles["above"]}>Tầng trên</div>
                </div>
                <div className={styles["seat-tables"]}>
                    <div className={styles["seat-table-container"]}>
                        <table className={styles["seat-table"]}>
                            <tbody>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "A01" isChoosing = {choosingSeats.includes("A01")} onChooseSeat = {chooseSeat} /></td>
                                    <td className = {styles["empty-seat-space"]}><Seat color = "#737B83"/></td>
                                    <td><Seat color = "#737B83" seatID = "A02" isChoosing = {choosingSeats.includes("A02")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "A03" isChoosing = {choosingSeats.includes("A03")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "A04" isChoosing = {choosingSeats.includes("A04")} onChooseSeat = {chooseSeat} /></td>
                                    <td><Seat color = "#737B83" seatID = "A05" isChoosing = {choosingSeats.includes("A05")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "A06" isChoosing = {choosingSeats.includes("A06")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "A07" isChoosing = {choosingSeats.includes("A07")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "A08" isChoosing = {choosingSeats.includes("A08")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "A09" isChoosing = {choosingSeats.includes("A09")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "A10" isChoosing = {choosingSeats.includes("A10")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "A11" isChoosing = {choosingSeats.includes("A11")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "A12" isChoosing = {choosingSeats.includes("A12")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "A13" isChoosing = {choosingSeats.includes("A13")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "A14" isChoosing = {choosingSeats.includes("A14")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "A15" isChoosing = {choosingSeats.includes("A15")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "A16" isChoosing = {choosingSeats.includes("A16")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "A17" isChoosing = {choosingSeats.includes("A17")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles["seat-table-container"]}>
                    <table className={styles["seat-table"]}>
                            <tbody>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "B01" isChoosing = {choosingSeats.includes("B01")} onChooseSeat = {chooseSeat}/></td>
                                    <td className = {styles["empty-seat-space"]}><Seat color = "#737B83"/></td>
                                    <td><Seat color = "#737B83" seatID = "B02" isChoosing = {choosingSeats.includes("B02")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "B03" isChoosing = {choosingSeats.includes("B03")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "B04" isChoosing = {choosingSeats.includes("B04")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "B05" isChoosing = {choosingSeats.includes("B05")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "B06" isChoosing = {choosingSeats.includes("B06")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "B07" isChoosing = {choosingSeats.includes("B07")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "B08" isChoosing = {choosingSeats.includes("B08")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "B09" isChoosing = {choosingSeats.includes("B09")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "B10" isChoosing = {choosingSeats.includes("B10")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "B11" isChoosing = {choosingSeats.includes("B11")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "B12" isChoosing = {choosingSeats.includes("B12")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "B13" isChoosing = {choosingSeats.includes("B13")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "B14" isChoosing = {choosingSeats.includes("B14")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                                <tr>
                                    <td><Seat color = "#737B83" seatID = "B15" isChoosing = {choosingSeats.includes("B15")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "red" seatID = "B16" isChoosing = {choosingSeats.includes("B16")} onChooseSeat = {chooseSeat}/></td>
                                    <td><Seat color = "#737B83" seatID = "B17" isChoosing = {choosingSeats.includes("B17")} onChooseSeat = {chooseSeat}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
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
                {choosingSeats.length > 0 &&
                    <>
                        <div className={styles["calculation"]}>
                            <div className={styles["chosenSeats"]}>{choosingSeats.length} vé: {choosingSeats.map((el, index) => index === choosingSeats.length - 1 ? `${el}` : `${el}, `)}</div>
                            <div className={styles["total-price"]}>Tổng tiền: <span className={styles["price"]} style={{ color: "red", fontWeight: 600 }}>{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"}</span></div>
                        </div>
                        <button className={styles["continue-btn"]} onClick={processContinueBtn}>Tiếp tục</button>
                    </>
                }
            </>
        }
    </div>
}

export default Ticket;