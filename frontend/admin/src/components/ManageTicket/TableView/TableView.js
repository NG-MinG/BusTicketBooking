import {ReactComponent as SelectIcon} from "../../../assets/svg/ManageTicket/white_down_arrow.svg";
import {ReactComponent as EditIcon} from "../../../assets/svg/ManageTicket/edit.svg";
import {ReactComponent as RemoveIcon} from "../../../assets/svg/ManageTicket/remove.svg";
import styles from "./TableView.module.css"


const TableView = () => {
    return (
        <div className={styles["table-section"]}>
        <div className={styles["table-container"]}>
            <table className = {styles["ticket-table"]}>
                <thead className = {styles["thead"]}>
                    <tr>
                        <th className = {styles["time-heading"]}>
                            <select name="date-time" id="" className={styles["select-custom"]}>
                                <option value="" disabled selected>Thời gian</option>
                                <option value="increasing">Tăng dần</option>
                                <option value="decreasing">Giảm dần</option>
                            </select>
                        </th>
                        <th className = {styles["departure-depot-heading"]}>
                            <select name="departure-depot" id="" className={styles["select-custom"]}>
                                <option value="" disabled selected>Điểm lên</option>
                                <option value="increasing">BX Đồng Tâm</option>
                                <option value="decreasing">BX Miền Tây</option>
                            </select>
                        </th>
                        <th className = {styles["arrival-depot-heading"]}>
                            <select name="arrival-depot" id="" className={styles["select-custom"]}>
                                <option value="" disabled selected>Điểm xuống</option>
                                <option value="increasing">BX Đồng Tâm</option>
                                <option value="decreasing">BX Miền Tây</option>
                            </select>
                        </th>
                        <th className = {styles["bus-type-heading"]}>
                            <select name="bus-type" id="" className={styles["select-custom"]}>
                                <option value="" disabled selected>Loại xe</option>
                                <option value="chair">Ghế</option>
                                <option value="sleeper">Giường</option>
                                <option value="limousine">Limousine</option>
                            </select>
                        </th>
                        <th className = {styles["ticket-price-heading"]}>
                            <select name="departure-depot" id="" className={styles["select-custom"]}>
                                <option value="" disabled selected>Giá vé</option>
                                <option value="increasing">Tăng dần</option>
                                <option value="decreasing">Giảm dần</option>
                            </select>
                        </th>
                        <th className = {styles["temp-heading"]}></th>
                        <th className = {styles["temp-heading"]}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    <tr>    
                        <td className = {styles["date-time"]}>
                        03-12-2023 05:00-09:00
                        </td>
                        <td className = {styles["departure-depot"]}>BX Miền Tây</td>
                        <td className = {styles["arrival-depot"]}>BX Cà Mau</td>
                        <td className = {styles["bus-type"]}>Limousine</td>
                        <td className = {styles["ticket-price"]}>185.000đ</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    ) 
    
}

export default TableView;