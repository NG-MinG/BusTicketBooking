import styles from "./StepLine.module.css";

const StepLine = (props) => {
    return(
    <>
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
    </>
    ) 
}
export default StepLine;