import styles from "./ManageTicketPage.module.css";
import Searching from "../../components/ManageTicket/Searching/Searching";
import PlaceChoosing from "../../components/ManageTicket/PlaceChoosing/PlaceChoosing";
import TableView from "../../components/ManageTicket/TableView/TableView";
import SeatLayout from "../../components/SeatLayout/SeatLayout";
import CreateButton from "../../components/CreateButton/CreateButton";
import {ReactComponent as ToIcon} from "../../assets/svg/ManageTicket/right_arrow.svg";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTicketDetails} from "../../store/reducers/ticketManagingSlice.js";
import axios from 'axios';
import ChairLayout from "../../components/BusLayout/ChairLayout/ChairLayout";
import SleeperLayout from "../../components/BusLayout/SleeperLayout/SleeperLayout";
import LimousineLayout from "../../components/BusLayout/LimousineLayout/LimousineLayout";
import { useNavigate } from "react-router-dom";



const ManageTicketPage = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const tickets = useSelector((state) => state.ticketManaging.tickets); 
    const currentTicketDetails = useSelector((state) => state.ticketManaging.currentTicketDetails);
    console.log("this currentTicket details: ", currentTicketDetails);
    // used for crud ticket form
    const [selectedChange, setSelectedChange] = useState({
        departure_city: '',
        arrival_city: '',
        departure_depot: '',
        arrival_depot: '',
        bus_type: '',
    });

    const [inputChange, setInputChange] = useState({
        date: '',
        time: '',
        price: '',
    })
    // show modal form when creating new ticket
    const [createTicket, setCreateTicket] = useState(false);
    // distinguish between fromHCM and toHCM state
    const [placeChoosing, setPlaceChoosing] = useState({
        fromHCM: true,
        toHCM: false,
    })
    // used for get locations and stations data
    const [locations, setLocations] = useState([]);
    const [stations, setStations] = useState([]);
    
    // handle state changes
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

    // handle select changes in CRUD ticket form
    const handleSelectChange = (event) => {
        const {name, value} = event.target;
        let total_seats = 0;
        if (name === "bus_type") {
            if (value === "Ghế") {
                total_seats = 28;
            }
            else if (value === "Giường") {
                total_seats = 36;
            }
            else if (value === "Limousine") {
                total_seats = 32;
            }
        }
        setSelectedChange((pre) => {
            return {
                ...pre,
                [name]: value,
            }
        })
        dispatch(setCurrentTicketDetails({
            ...currentTicketDetails,
            [name]: value,
            total_seats: total_seats,
        }));
    }
    // handle input changes in CRUD ticket form
    const handleInputChange = (event) => {
        const {name, value} = event.target; 
        setInputChange((pre) => {
            if (name === "date") {
                const regex = /^([0-2]?[0-9]|[3][0-1])-(0?[1-9]|1[0-2])-(\d{4})$/;
                if (regex.test(value)) {
                    const dateParts = value.split('-');
                    const day = dateParts[0].padStart(2, '0');
                    const month = dateParts[1].padStart(2, '0');
                    const year = dateParts[2];
                    const isoDateString = new Date(`${year}-${month}-${day}`).toISOString();
                    dispatch(setCurrentTicketDetails({
                        ...currentTicketDetails,
                        date: isoDateString,
                    }))
                }
            }
            else if (name === "time") {
                const regex =/^\d{1,2}:\d{2}-\d{1,2}:\d{2}$/;
                if (regex.test(value)) {
                    const departure_time =  value.split('-')[0];
                    const arrival_time = value.split('-')[1];
                    dispatch(setCurrentTicketDetails({
                        ...currentTicketDetails,
                        departure_time: departure_time,
                        arrival_time: arrival_time
                    }))
                }
            }
            else {
                dispatch(setCurrentTicketDetails({
                    ...currentTicketDetails,
                    [name]: value,
                }))
            }
           
        })
    }


    const handleCreateTicket = () => {
        const data = currentTicketDetails;
        const isEmptyProperty = Object.values(data).some(value => value === '' || value === 0);
        // if data has any properties which have empty value
        if (isEmptyProperty) { 
            console.log("current ticket: ", data);
            alert("Please fill out all the fields in the form.");
            return;
        }
        // if data is valid
        axios.post('http://localhost:5000/bus/api/v1/admin/ticket-managing/create-ticket', data).then((res) => {
            console.log("res");
            dispatch(setCurrentTicketDetails({}));
            alert('You created a new ticket successfully!');
            navigate("/admin/manage-ticket/ticket");
            setCreateTicket(false);
        }).catch((err) => {
            console.error(err);
        })
    }

    useEffect(() => {
        async function fetchData() {
            let res = await axios.get('http://localhost:5000/bus/api/v1/admin/ticket-managing/get-locations');
            setLocations(res.data.locations);
            res = await axios.get("http://localhost:5000/bus/api/v1/admin/ticket-managing/get-stations");
            setStations(res.data.stations);
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
                        <select name="departure_city" onChange = {handleSelectChange} id="" className = {styles["departure-cỉty"]}>
                            <option value="" disabled selected>Điểm đi</option>
                            {locations.length > 0 ? locations.map((el, index) => <option key = {el.id} value = {el.location}>{el.location} </option>) : null }
                        </select>
                        <span className={styles["to-icon"]}><ToIcon/></span>
                        <select name="arrival_city" onChange = {handleSelectChange} id="" className = {styles["arrival-cỉty"]}>
                            <option value="" disabled selected>Điểm đến</option>
                            {locations.length > 0 ? locations.map((el, index) => <option key = {el.id} value = {el.location}>{el.location} </option>) : null }
                        </select>
                        <div className={styles["date-time"]}>
                            <input name = "date" onChange = {handleInputChange} type="text" className = {styles["date"]} placeholder="dd-mm-yyyy"/>
                            <input name = "time" onChange = {handleInputChange} type="text" className = {styles["hour"]} placeholder="time"/>
                        </div>
                    </div>
                    <div className={styles["second-row"]}>
                        <select name="departure_depot" onChange = {handleSelectChange} id="" className = {styles["departure-depot"]}>
                                <option value="" disabled selected>Điểm lên xe</option>
                                {stations.length > 0 ? 
                                stations.find((el) => el.location === selectedChange.departure_city)?.stations
                                .map((station) => <option key = {station.name} value = {station.name}>
                                    {station.name}
                                </option>) : null}
                        </select>
                        <select name="arrival_depot" onChange = {handleSelectChange} id="" className = {styles["arrival-depot"]}>
                            <option value="" disabled selected>Điểm xuống xe</option>
                            {stations.length > 0 ? 
                                stations.find((el) => el.location === selectedChange.arrival_city)?.stations
                                .map((station) => <option key = {station.name} value = {station.name}>
                                    {station.name}
                                </option>) : null}
                        </select>
                        <select name="bus_type" onChange = {handleSelectChange} id="" className = {styles["bus-type"]}>
                            <option value="" disabled selected>Loại xe</option>
                            <option value="Ghế">Ghế</option>
                            <option value="Giường">Giường</option>
                            <option value="Limousine">Limousine</option>
                        </select>
                    </div>
                    <div className={styles["third-row"]}>
                        <input type="text" name = "price" onChange = {handleInputChange} className={styles["ticket-price"]} placeholder="Giá vé (vnđ)"/>
                    </div>
                </div>
                {/* <SeatLayout/> */}
                {/* <div className={styles["bus-layout"]}> */}
                    {/* <LimousineLayout bookedSeats = {[]}/> */}
                    {/* <ChairLayout bookedSeats = {[]}/> */}
                    {/* <SeatLayout/> */}
                {/* </div> */}
            </div>
            <div className={styles["create-btn"]}>
                <CreateButton onCreateTicket = {handleCreateTicket}/>
            </div>
        </div>
      
    </div>}
    </>
    
}

export default ManageTicketPage;