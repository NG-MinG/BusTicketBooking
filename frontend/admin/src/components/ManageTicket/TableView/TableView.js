import {ReactComponent as SelectIcon} from "../../../assets/svg/ManageTicket/white_down_arrow.svg";
import {ReactComponent as EditIcon} from "../../../assets/svg/ManageTicket/edit.svg";
import {ReactComponent as RemoveIcon} from "../../../assets/svg/ManageTicket/remove.svg";
import {useSelector, useDispatch} from "react-redux";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { deleteTicket, getTicketUpdating } from "../../../store/reducers/ticketManagingSlice";
import styles from "./TableView.module.css";
import axios from "axios";


const TableView = (props) => {
    // const [tickets, setTickets] = useState([]);
    const tickets = useSelector((state) => state.ticketManaging.tickets);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentTickets, setCurrentTickets] = useState([]);

    useEffect(() => {
        setCurrentTickets([...tickets])
    }, [tickets])

    const handleDeleteTicket = (ticketId) => {
        axios.delete(`${process.env.REACT_APP_API_HOST}/admin/ticket-managing/delete-ticket/${ticketId}`).then((res) => {
            if (res.data.status === "success") {
                alert("Vé đã được xóa thành công!");
                dispatch(deleteTicket(ticketId));
                navigate("/admin/manage-ticket/ticket");
                
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    const handleUpdateTicket = (ticketId) => {
        dispatch(getTicketUpdating(ticketId));
        props.onCRUDTicket();
    }

    
    return (
        <>
        {currentTickets.length > 0 && <div className={styles["table-section"]}>
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
                            </select>
                        </th>
                        <th className = {styles["arrival-depot-heading"]}>
                            <select name="arrival-depot" id="" className={styles["select-custom"]}>
                                <option value="" disabled selected>Điểm xuống</option>
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
                    {currentTickets.length > 0 ? currentTickets.map((el, index) => {
                        return <tr key = {el.id}>    
                        <td className = {styles["date-time"]} style = {{display: "flex", gap: "1.5rem"}}>
                            <span className={styles["date"]}>
                                {el.truncatedDate}
                            </span>
                            <span className={styles["time"]}>
                                {el.departure_time}-{el.arrival_time}
                            </span>
                        </td>
                        <td className = {styles["departure-depot"]}>{el.departure_depot}</td>
                        <td className = {styles["arrival-depot"]}>{el.arrival_depot}</td>
                        <td className = {styles["bus-type"]}>{el.bus_type}</td>
                        <td className = {styles["ticket-price"]}>{String(el.price).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"}</td>
                        <td className = {styles["crud"]}><button className={styles["edit-btn"]}>
                            <EditIcon onClick = {() => handleUpdateTicket(el.id)} className = {styles["edit-icn"]}/>
                        </button></td>
                        <td className = {styles["crud"]}><button className={styles["remove-btn"]}>
                            <RemoveIcon onClick = {() => handleDeleteTicket(el.id)} className = {styles["edit-icn"]}/>
                        </button></td>
                    </tr>
                    }) : null}
                </tbody>
            </table>
        </div>
    </div>}
    </>
    ) 
    
}

export default TableView;