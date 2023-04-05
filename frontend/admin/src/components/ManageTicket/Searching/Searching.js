import styles from "./Searching.module.css";
import { ReactComponent as MagnifyingGlassIcon } from "../../../assets/svg/ManageTicket/magnifying_glass.svg";
import CreateButton from "../../CreateButton/CreateButton";

const Searching = (props) => {
    return <div className = {styles["wrapper"]}>
        <form action="" className = {styles["searching-form"]}>
            <button className={styles["searching-btn"]}><MagnifyingGlassIcon/></button> 
            <input type="text" className = {styles["search-input"]} placeholder="Tìm kiếm"/>
        </form>
        <CreateButton onCreateTicket = {props.onCreateTicket}/>
    </div>
}
export default Searching;
