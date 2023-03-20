import styles from "./ChooseRoute.module.css"
import Ticket from "../../Ticket/Ticket";


const ChooseRoute = () => {
    return <>
        <div className = {styles["nav-bar"]}>
            This is navbar
        </div>
        <div className = {styles["main-content"]}>
            <div className = {styles["route-title"]}>TP.HỒ CHÍ MINH - CẦN THƠ</div>
            <div className = {styles["date"]}>10/3/2023</div>
            <div className = {styles["step-line-container"]}>
                <div className =  {styles["step-block"]}>
                    <div className={`${styles["title"]} ${styles["active-title"]}`}>Chọn tuyến</div>
                    <div className = {styles["current-step"]}>
                        <div className={styles.text}>1</div>
                        {/* <div className={styles["current-line"]}></div> */}
                    </div>
                </div>
                <div className =  {styles["step-block"]}>
                    <div className={`${styles["title"]} ${styles["active-title"]}`}>Xác nhận lộ trình</div>
                    <div className = {styles["next-step"]}>
                        <div className={styles.text}>2</div>
                    </div>
                </div>
                <div className =  {styles["step-block"]}>
                    <div className={`${styles["title"]} ${styles["inactive-title"]}`}>Thông tin hành khách</div>
                    <div className = {styles["empty-step"]}>
                        <div className={styles.text}>3</div>
                    </div>
                </div>
                <div className =  {styles["step-block"]}>
                    <div className={`${styles["title"]} ${styles["inactive-title"]}`}>Thanh toán</div>
                    <div className = {styles["empty-step"]}>
                        <div className={styles.text}>4</div>
                    </div>
                </div>
                <div className={styles["current-line"]}></div>
                <div className={styles["empty-line-1"]}></div>
                <div className={styles["empty-line-2"]}></div>
            </div>
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
            <div className={styles["reminder"]}>Vui lòng chọn giờ lên xe phù hợp</div>
            <Ticket/>
            <Ticket/>
            <Ticket/>
        </div>
        <div className = {styles["nav-bar"]}>This is footer</div>
    </> 
    
}   


export default ChooseRoute;