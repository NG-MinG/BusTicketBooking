import styles from "./CreateButton.module.css";
import { ReactComponent as CreateIcon } from "../../assets/svg/ManageTicket/plus.svg";

const CreateButton = (props) => {
    return (
    <button className={styles["create-btn"]} onClick = {props.onCreateTicket}>
            <div className={styles["content"]}>
                <span className={styles["text"]}>Create</span>
                <span className={styles["icon"]}><CreateIcon/></span>
            </div>
    </button>
    ) 
}

export default CreateButton;
