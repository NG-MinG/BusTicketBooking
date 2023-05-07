import styles from "./SleeperLayout.module.css"
import Seat from "../../Seat/Seat";


const SleeperLayout = (props) => {
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
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A01") ? "red" : "#737B83"} seatID = "A01"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A02") ? "red" : "#737B83"} seatID = "A02"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A03") ? "red" : "#737B83"} seatID = "A03"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A04") ? "red" : "#737B83"} seatID = "A04" /></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A05") ? "red" : "#737B83"} seatID = "A05" /></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A06") ? "red" : "#737B83"} seatID = "A06"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A07") ? "red" : "#737B83"} seatID = "A07"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A08") ? "red" : "#737B83"} seatID = "A08"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A09") ? "red" : "#737B83"} seatID = "A09"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A10") ? "red" : "#737B83"} seatID = "A10"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A11") ? "red" : "#737B83"} seatID = "A11"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A12") ? "red" : "#737B83"} seatID = "A12"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A13") ? "red" : "#737B83"} seatID = "A13"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A14") ? "red" : "#737B83"} seatID = "A14"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A15") ? "red" : "#737B83"} seatID = "A15"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A16") ? "red" : "#737B83"} seatID = "A16"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A17") ? "red" : "#737B83"} seatID = "A17"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("A18") ? "red" : "#737B83"} seatID = "A18"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles["seat-table-container"]}>
        <table className={styles["seat-table"]}>
                <tbody>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B01") ? "red" : "#737B83"} seatID = "B01"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B02") ? "red" : "#737B83"} seatID = "B02"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B03") ? "red" : "#737B83"} seatID = "B03"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B04") ? "red" : "#737B83"} seatID = "B04"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B05") ? "red" : "#737B83"} seatID = "B05"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B06") ? "red" : "#737B83"} seatID = "B06"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B07") ? "red" : "#737B83"} seatID = "B07"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B08") ? "red" : "#737B83"} seatID = "B08"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B09") ? "red" : "#737B83"} seatID = "B09"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B10") ? "red" : "#737B83"} seatID = "B10"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B11") ? "red" : "#737B83"} seatID = "B11"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B12") ? "red" : "#737B83"} seatID = "B12"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B13") ? "red" : "#737B83"} seatID = "B13"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B14") ? "red" : "#737B83"} seatID = "B14"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B15") ? "red" : "#737B83"} seatID = "B15"/></td>
                    </tr>
                    <tr>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B16") ? "red" : "#737B83"} seatID = "B16"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B17") ? "red" : "#737B83"} seatID = "B17"/></td>
                        <td><Seat color = {props.bookedSeats.length > 0 && props.bookedSeats.includes("B18") ? "red" : "#737B83"} seatID = "B18"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
}

export default SleeperLayout;