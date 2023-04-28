import styles from "./LimousineLayout.module.css"
import Seat from "../../TicketBooking/Seat/Seat.js";


const LimousineLayout = (props) => {
    return <>
    <div className={styles["layout-seat-title"]}>
        <div className={styles["below"]}>Tầng dưới</div>
        <div className={styles["above"]}>Tầng trên</div>
    </div>  
    <div className={styles["seat-tables"]}>
        <div className={styles["seat-table-container"]}>
            <table className={styles["seat-table"]}>
                <tbody>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "A01" isChoosing = {props.choosingSeats.includes("A01")} onChooseSeat = {props.onChooseSeat} /></td>
                        <td className = {styles["empty-seat-space"]}><Seat color = "#737B83"/></td>
                        <td><Seat color = "#737B83" seatID = "A02" isChoosing = {props.choosingSeats.includes("A02")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "A03" isChoosing = {props.choosingSeats.includes("A03")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "A04" isChoosing = {props.choosingSeats.includes("A04")} onChooseSeat = {props.onChooseSeat} /></td>
                        <td><Seat color = "#737B83" seatID = "A05" isChoosing = {props.choosingSeats.includes("A05")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "A06" isChoosing = {props.choosingSeats.includes("A06")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "A07" isChoosing = {props.choosingSeats.includes("A07")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "#737B83" seatID = "A08" isChoosing = {props.choosingSeats.includes("A08")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "A09" isChoosing = {props.choosingSeats.includes("A09")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "A10" isChoosing = {props.choosingSeats.includes("A10")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "#737B83" seatID = "A11" isChoosing = {props.choosingSeats.includes("A11")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "A12" isChoosing = {props.choosingSeats.includes("A12")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "A13" isChoosing = {props.choosingSeats.includes("A13")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "#737B83" seatID = "A14" isChoosing = {props.choosingSeats.includes("A14")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "A15" isChoosing = {props.choosingSeats.includes("A15")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td className = {styles["empty-seat-space"]}><Seat color = "#737B83"/></td>
                        {/* <td><Seat color = "red" seatID = "A16" isChoosing = {props.choosingSeats.includes("A16")} onChooseSeat = {props.onChooseSeat}/></td> */}
                        <td><Seat color = "#737B83" seatID = "A17" isChoosing = {props.choosingSeats.includes("A17")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles["seat-table-container"]}>
        <table className={styles["seat-table"]}>
                <tbody>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "B01" isChoosing = {props.choosingSeats.includes("B01")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td className = {styles["empty-seat-space"]}><Seat color = "#737B83"/></td>
                        <td><Seat color = "#737B83" seatID = "B02" isChoosing = {props.choosingSeats.includes("B02")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "B03" isChoosing = {props.choosingSeats.includes("B03")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "B04" isChoosing = {props.choosingSeats.includes("B04")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "#737B83" seatID = "B05" isChoosing = {props.choosingSeats.includes("B05")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "B06" isChoosing = {props.choosingSeats.includes("B06")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "B07" isChoosing = {props.choosingSeats.includes("B07")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "#737B83" seatID = "B08" isChoosing = {props.choosingSeats.includes("B08")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "B09" isChoosing = {props.choosingSeats.includes("B09")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "B10" isChoosing = {props.choosingSeats.includes("B10")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "#737B83" seatID = "B11" isChoosing = {props.choosingSeats.includes("B11")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "B12" isChoosing = {props.choosingSeats.includes("B12")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "red" seatID = "B13" isChoosing = {props.choosingSeats.includes("B13")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td><Seat color = "#737B83" seatID = "B14" isChoosing = {props.choosingSeats.includes("B14")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                    <tr>
                        <td><Seat color = "#737B83" seatID = "B15" isChoosing = {props.choosingSeats.includes("B15")} onChooseSeat = {props.onChooseSeat}/></td>
                        <td className = {styles["empty-seat-space"]}><Seat color = "#737B83"/></td>
                        {/* <td><Seat color = "red" seatID = "B16" isChoosing = {props.choosingSeats.includes("B16")} onChooseSeat = {props.onChooseSeat}/></td> */}
                        <td><Seat color = "#737B83" seatID = "B17" isChoosing = {props.choosingSeats.includes("B17")} onChooseSeat = {props.onChooseSeat}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
}

export default LimousineLayout;