import styles from "./PlaceChoosing.module.css";
import {ReactComponent as StatusIcon} from "../../../assets/svg/ManageTicket/grey_round.svg";
import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import {setTickets} from "../../../store/reducers/ticketManagingSlice.js";
import axios from "axios";


const PlaceChoosing = (props) => {
    const dispatch = useDispatch();
    const handleSelectChange = (event) => {
        console.log("handleSelectChange");
        if (props.where === "from_TP.HCM") {
            console.log("fromHCM");
            console.log("event.target.value: ", event.target.value);
            axios.get(`http://localhost:5000/bus/api/v1/tickets/get-tickets/?departure_city=TP.Hồ Chí Minh&arrival_city=${event.target.value}`)
            .then((res) => {
            console.log("res data: ", res.data);
            console.log("tickets length:  ", res.data.tickets.length);
            dispatch(setTickets([...res.data.tickets]))
        }).catch((err) => console.error(err));
        }
        else if (props.where === "to_TP.HCM") {
            console.log("toHCM");
            axios.get(`http://localhost:5000/bus/api/v1/tickets/get-tickets/?departure_city=${event.target.value}&arrival_city=TP.Hồ Chí Minh`)
            .then((res) => {
                console.log("res: ", res.data.tickets);
                dispatch(setTickets([...res.data.tickets]))
            }).catch((err) => console.error(err));
        }
    }   

    return <div className={`${styles["wrapper"]} ${props.isActive && styles["active-border"]}`}>
        <span className={styles["status-icon"]}><StatusIcon style = {{fill: props.isActive ? "#46A7ED": "#E0E0E0"}}/></span>
        <span className={`${styles["text"]} ${props.isActive && styles["active-text"]}`}>{props.text}</span>
        <select name="place-chosen" className={styles["choose-place"]} onChange = {handleSelectChange}>
            <option value="" disabled selected>Chọn vị trí</option>
            {props.locations.length > 0 ? props.locations.map((el, index) => {
                    if (el.location !== "TP.Hồ Chí Minh") {
                        return  <option key = {el.id} value = {el.location}>
                    {el.location} </option>
                    }
                }) : null }
            {/* <option value="Cần Thơ">Cần Thơ</option>
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
            <option value="Cà Mau">Cà Mau</option> */}
        </select>
    </div>
}


export default PlaceChoosing;