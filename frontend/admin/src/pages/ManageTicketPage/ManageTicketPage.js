import styles from "./ManageTicketPage.module.css";
import Searching from "../../components/ManageTicket/Searching/Searching";
import PlaceChoosing from "../../components/ManageTicket/PlaceChoosing/PlaceChoosing";
import TableView from "../../components/ManageTicket/TableView/TableView";
import SeatLayout from "../../components/SeatLayout/SeatLayout";
import CreateButton from "../../components/CreateButton/CreateButton";
import {ReactComponent as ToIcon} from "../../assets/svg/ManageTicket/right_arrow.svg";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';


const ManageTicketPage = () => {
    const tickets = useSelector((state) => state.ticketManaging.tickets); 
    const dispatch = useDispatch();
    const [createTicket, setCreateTicket] = useState(false);
    const [placeChoosing, setPlaceChoosing] = useState({
        fromHCM: true,
        toHCM: false,
    })

    const [locations, setLocations] = useState([]);

    const handleFirstPlaceChoosingClick = () => {
        setPlaceChoosing((pre) => {
            return {
                ...pre,
                fromHCM: true,
                toHCM: false,
            }
        })
    } 

    const handleSecondPlaceChoosingClick = () => {
        setPlaceChoosing((pre) => {
            return {
                ...pre,
                fromHCM: false,
                toHCM: true,
            }
        })
    } 

    const cancelCRUDTicket = () => {
        setCreateTicket(false);
    }

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:5000/bus/api/v1/admin/ticket-managing/get-locations');
            setLocations(res.data.locations);
        }
        fetchData();
    }, [])

   

    return  <>
        <div className={styles["wrapper"]}>
        {/* search bar */}
        <Searching onCreateTicket = {() => {
            setCreateTicket(true)}
            }/>
        {/* choose the place */}
        <div className={styles["place-choosing"]}>
            <div className={styles["from-HCM"]} onClick = {handleFirstPlaceChoosingClick}>
                <PlaceChoosing where = "from_TP.HCM" locations = {locations} text = "Đi từ TP.HCM đến" isActive = {placeChoosing.fromHCM ? true : false}/>
            </div>
            <div className={styles["to-HCM"]} onClick = {handleSecondPlaceChoosingClick} >
                <PlaceChoosing where = "to_TP.HCM" locations = {locations} text = "Đi đến TP.HCM từ" isActive = {placeChoosing.toHCM ? true : false}/>
            </div>
        </div>
        {/* tickets table */}
        <TableView/>
    </div>
    {createTicket &&  <div className={styles["ticket-managing"]}>
        <div className={styles["overlay"]}  onClick = {cancelCRUDTicket}></div>
        <div className={styles["crud-ticket-form"]}>
            <div className={styles["title"]}>Tạo vé</div>
            <div className={styles["ticket-details"]}>
                <div className = {styles["form"]}>
                    <div className={styles["first-row"]}>
                        <select name="" id="" className = {styles["departure-cỉty"]}>
                            <option value="" disabled selected>Điểm đi</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
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
                        <span className={styles["to-icon"]}><ToIcon/></span>
                        <select name="" id="" className = {styles["arrival-cỉty"]}>
                            <option value="" disabled selected>Điểm đến</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
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
                        <div className={styles["date-time"]}>
                            <input type="text" className = {styles["date"]} placeholder="dd-mm-yyyy"/>
                            <input type="text" className = {styles["hour"]} placeholder="hh:mm"/>
                        </div>
                    </div>
                    <div className={styles["second-row"]}>
                        <select name="" id="" className = {styles["departure-depot"]}>
                                <option value="" disabled selected>Điểm lên xe</option>
                                {/* <option value="">BX Miền Tây</option>
                                <option value="">BX Đồng Tâm</option> */}
                        </select>
                        <select name="" id="" className = {styles["arrival-depot"]}>
                            <option value="" disabled selected>Điểm xuống xe</option>
                            {/* <option value="">BX Cần Thơ</option>
                            <option value="">BX Cà Mau</option> */}
                        </select>
                        <select name="" id="" className = {styles["bus-type"]}>
                            <option value="" disabled selected>Loại xe</option>
                            <option value="Ghế">Ghế</option>
                            <option value="Giường">Giường</option>
                            <option value="Nằm">Limousine</option>
                        </select>
                    </div>
                    <div className={styles["third-row"]}>
                        <input type="text" className={styles["ticket-price"]} placeholder="Giá vé (vnđ)"/>
                    </div>
                    {/* <input type="text" className = {styles["departure-depot"]}/>
                    <input type="text" className = {styles["arrival-depot"]}/>
                     */}
                </div>
                <SeatLayout/>
                <div className={styles["bus-layout"]}></div>
            </div>
            <div className={styles["create-btn"]}>
                <CreateButton/>
            </div>
        </div>
      
    </div>}
    </>
    
}

export default ManageTicketPage;