import styles from "./PlaceChoosing.module.css";
import {ReactComponent as StatusIcon} from "../../../assets/svg/ManageTicket/grey_round.svg";


const PlaceChoosing = (props) => {
    return <div className={`${styles["wrapper"]} ${props.isActive && styles["active-border"]}`}>
        <span className={styles["status-icon"]}><StatusIcon style = {{fill: props.isActive ? "#46A7ED": "#E0E0E0"}}/></span>
        <span className={`${styles["text"]} ${props.isActive && styles["active-text"]}`}>{props.text}</span>
        <select name="place-chosen" className={styles["choose-place"]}>
            <option value="" disabled selected>Chọn vị trí</option>
            <option value="Cần Thơ">Cần Thơ</option>
            <option value="Long An">Long An</option>
            <option value="Tiền Giang">Tiền Giang</option>
            <option value="Bến Tre">Bến Tre</option>
            <option value="Vĩnh Long">Vĩnh Long</option>
            <option value="Trà Vinh">Trà Vinh</option>
            <option value="Hậu Giang">Hậu Giang</option>
            <option value="Sóc Trăng">Sóc Trăng</option>
            <option value="Đồng Tháp">Đồng Tháp</option>
            <option value="An Giang">An Giang</option>
            <option value="Kiên Giang">Kiên Giang</option>
            <option value="Bạc Liêu">Bạc Liêu</option>
            <option value="Cà Mau">Cà Mau</option>
        </select>
    </div>
}


export default PlaceChoosing;