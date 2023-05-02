import styles from "./ChooseRoute.module.css"
import Ticket from "../../Ticket/Ticket";
import {useState, useEffect, useRef} from "react";
import { useSearchParams } from "react-router-dom"
import axios from "axios";
import StepLine from "../StepLine/StepLine";

// const tickets  = [  
//     {
//         id: '1',
//         departure_time: "03-12-2023 00:01",
//         arrival_time: "03-12-2023 04:01",
//         departure_city: "TP. Hồ Chí Minh",
//         arrival_city: "Cần Thơ",
//         ticket_type: "round_trip",
//         price: "170.000đ",
//         travel_time: "4h",
//         distance: "160km",
//         departure_depot: "Bến Xe Miền Tây",
//         arrival_depot: "Bến Xe Cần Thơ",
//         reserved_seat: 25,
//         total_seat: 34, 
//         bus_type: "Limousine"
//     },
//     {
//         id: '2',
//         departure_time: "03-12-2023 04:01",
//         arrival_time: "03-12-2023 08:01",
//         departure_city: "TP. Hồ Chí Minh",
//         arrival_city: "Cần Thơ",
//         ticket_type: "round_trip",
//         price: "150.000đ",
//         travel_time: "4h",
//         distance: "160km",
//         departure_depot: "Bến Xe Miền Tây",
//         arrival_depot: "Bến Xe Cần Thơ",
//         reserved_seat: 23,
//         total_seat: 34, 
//         bus_type: "Giường"
//     },
//     {
//         id: '3',
//         departure_time: "03-12-2023 08:01",
//         arrival_time: "03-12-2023 12:01",
//         departure_city: "TP. Hồ Chí Minh",
//         arrival_city: "Cần Thơ",
//         ticket_type: "round_trip",
//         price: "130.000đ",
//         travel_time: "4h",
//         distance: "160km",
//         departure_depot: "Bến Xe Miền Tây",
//         arrival_depot: "Bến Xe Cần Thơ",
//         reserved_seat: 22,
//         total_seat: 34, 
//         bus_type: "Ghế"
//     }
// ]

const ChooseRoute = (props) => {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [tickets, setTickets] = useState([]);
    const [startingDepots, setStartingDepots] = useState([]);
    const [selectedTimeRange, setSelectedTimeRange] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedBusType, setSelectedBusType] = useState('');


    let originalTickets = useRef([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_HOST}/tickets/get-ticket/?departure_city=${props.departure_city}&arrival_city=${props.arrival_city}&date=${props.date}`)
        .then((res) => {
            originalTickets.current = [...res.data.tickets];
            setTickets(originalTickets.current.map((el, index) => {
                    const ticketPreProcessed = {
                        ...el,
                        price: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(el.price).replace(/\s/g, ' '),
                        distance: `${Math.floor(el.distance/1000)} km`,
                        travel_time: `${Math.floor(el.travel_time/3600)} tiếng`
                    }
                    originalTickets.current[index] = ticketPreProcessed;
                    return ticketPreProcessed;
                }
            ))
            setStartingDepots([...res.data.starting_depots.stations]);
            setIsLoading(false);
        }).catch((err) => console.log(err));
    }, [])

    const [chosenTicket, setChosenTicket] = useState({});
    const chooseTicket = (id) => {
        setChosenTicket(id);
    }
    
    // filter based on hours
    const handleTimeSelectChange = (e) => {
        let ticketsFiltered = [...originalTickets.current];
        // if (e.target.value === "Giờ") 
        // {
        //     setTickets(originalTickets.current);
        //     ticketsFiltered = [...originalTickets.current]
        // }
        if (e.target.value !== "Giờ") {
            // setTickets(originalTickets.current.filter((el) => {
            //     return parseInt(el.departure_time.split(":")[0]) >= parseInt(e.target.value.split("-")[0]) 
            //     && parseInt(el.departure_time.split(":")[0]) <= parseInt(e.target.value.split("-")[1]);
            // }))
            ticketsFiltered = ticketsFiltered.filter((el) => {
                return parseInt(el.departure_time.split(":")[0]) >= parseInt(e.target.value.split("-")[0]) 
                && parseInt(el.departure_time.split(":")[0]) <= parseInt(e.target.value.split("-")[1]);
            })
            ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(a.departure_time.split(":")[0]) - parseInt(b.departure_time.split(":")[0]));
        }
        if (selectedPrice && selectedPrice !== "Giá") {
            if (selectedPrice === "LowToHigh") {
             ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(a.price.replace(/\.|\s/g, '')) - parseInt(b.price.replace(/\.|\s/g, '')));
            } else if (selectedPrice === "HighToLow") { 
             ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(b.price.replace(/\.|\s/g, '')) - parseInt(a.price.replace(/\.|\s/g, '')));
            }
        } 
        if (selectedBusType && selectedBusType !== "Loại xe") {
            ticketsFiltered = ticketsFiltered.filter((el) => {
                return el.bus_type === selectedBusType;
            })
        }
        setTickets(ticketsFiltered);
        setSelectedTimeRange(e.target.value);
        // setSelectedPrice("Giá");
        // setSelectedBusType("Loại xe");
    }

    // sort based on price
    const handlePriceChange = (e) => {
        let ticketsFiltered = [...originalTickets.current];
        // if (e.target.value === "Giá") {
        //     setTickets(originalTickets.current);
        // }
        if (e.target.value !== "Giá") {
            if (e.target.value === "LowToHigh") {
                // let sortedTickets = [...originalTickets.current].sort((a,b) => parseInt(a.price.replace(/\.|\s/g, '')) - parseInt(b.price.replace(/\.|\s/g, '')));
                // setTickets(sortedTickets);
                ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(a.price.replace(/\.|\s/g, '')) - parseInt(b.price.replace(/\.|\s/g, '')));
            }
            else if (e.target.value === "HighToLow") {
                // let sortedTickets = [...originalTickets.current].sort((a,b) => parseInt(b.price.replace(/\.|\s/g, '')) - parseInt(a.price.replace(/\.|\s/g, '')));
                // setTickets(sortedTickets)
                ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(b.price.replace(/\.|\s/g, '')) - parseInt(a.price.replace(/\.|\s/g, '')));
            }
        }
        if (selectedTimeRange && selectedTimeRange !== "Giờ") {
            ticketsFiltered = ticketsFiltered.filter((el) => {
                return parseInt(el.departure_time.split(":")[0]) >= parseInt(selectedTimeRange.split("-")[0]) 
                && parseInt(el.departure_time.split(":")[0]) <= parseInt(selectedTimeRange.split("-")[1]);
            })
            ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(a.departure_time.split(":")[0]) - parseInt(b.departure_time.split(":")[0]));
        }
        if (selectedBusType && selectedBusType !== "Loại xe") {
            ticketsFiltered = ticketsFiltered.filter((el) => {
                return el.bus_type === selectedBusType;
            })
        }
        setTickets(ticketsFiltered);
        setSelectedPrice(e.target.value);
        // setSelectedTimeRange("Giờ");
        // setSelectedBusType("Loại xe");
    }

    // filter based on bus type
    const handleBusTypeChange = (e) => {
        let ticketsFiltered = [...originalTickets.current];
        // if (e.target.value === "Loại xe") 
        // {
        //     setTickets(originalTickets.current);
        // }
        if (e.target.value !== "Loại xe") {
            ticketsFiltered = ticketsFiltered.filter((el) => {
                return el.bus_type === e.target.value;
            })
            // setTickets(originalTickets.current.filter((el) => {
            //     return el.bus_type === e.target.value;
            // }))
        }
        if (selectedPrice && selectedPrice !== "Giá") {
            if (selectedPrice === "LowToHigh") {
             ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(a.price.replace(/\.|\s/g, '')) - parseInt(b.price.replace(/\.|\s/g, '')));
            } else if (selectedPrice === "HighToLow") { 
             ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(b.price.replace(/\.|\s/g, '')) - parseInt(a.price.replace(/\.|\s/g, '')));
            }
        } 
        if (selectedTimeRange && selectedTimeRange !== "Giờ") {
            ticketsFiltered = ticketsFiltered.filter((el) => {
                return parseInt(el.departure_time.split(":")[0]) >= parseInt(selectedTimeRange.split("-")[0]) 
                && parseInt(el.departure_time.split(":")[0]) <= parseInt(selectedTimeRange.split("-")[1]);
            })
            ticketsFiltered = ticketsFiltered.sort((a,b) => parseInt(a.departure_time.split(":")[0]) - parseInt(b.departure_time.split(":")[0]));
        }
        setTickets(ticketsFiltered);
        setSelectedBusType(e.target.value);
        // setSelectedTimeRange("Giờ");
        // setSelectedPrice("Giá");
    }

    // handle filter change
    // const handleFilterChange = (e) => {
    //     const ticketsFiltered = [...originalTickets.current];
    // }
    return <>
        <div className = {styles["main-content"]}>
            <StepLine departure_city = {props.departure_city} arrival_city = {props.arrival_city} date = {props.date} currentStep = {props.currentStep}/>
            <div className={styles["reminder"]}>Vui lòng chọn giờ lên xe phù hợp</div>
            <div className={styles["Filter"]}>
                <select value = {selectedPrice} name="PriceFilter" id="" onChange = {handlePriceChange} className = {styles.priceFilter}>
                    <option value="Giá" disable selected>Giá</option>
                    <option value="LowToHigh">Thấp - Cao</option>
                    <option value="HighToLow">Cao - Thấp</option>
                </select>
                <select value = {selectedBusType} onChange = {handleBusTypeChange} name="CarTypeFilter" id="" >
                    <option value="Loại xe" disable selected>Loại xe</option>
                    <option value="Ghế">Ghế</option>
                    <option value="Giường">Giường</option>
                    <option value="Limousine">Limousine</option>
                </select>
                <select value = {selectedTimeRange} onChange = {handleTimeSelectChange} name="HoursFilter" id="">
                    <option value="Giờ" disable selected>Giờ</option>
                    <option value="0-6">0h-6h</option>
                    <option value="6-12">6h-12h</option>
                    <option value="12-18">12h-18h</option>
                    <option value="18-24">18h-24h</option>
                </select>
            </div>
            {
                tickets.length > 0  ? tickets.map((el, id) => {
                    return <Ticket ticketDetails = {el} startingDepots = {startingDepots} dropDown = {chosenTicket === el.id} onChooseTicket = {chooseTicket} onSetStep = {props.onSetStep}/>
                }) : null
            }
            {/* <Ticket/>
            <Ticket/>
            <Ticket/> */}
        </div>
    </> 
}   


export default ChooseRoute;


// <div className = {styles["step-line-container"]}>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["active-title"]}`}>Chọn tuyến</div>
//                     <div className = {styles["current-step"]}>
//                         <div className={styles.text}>1</div>
//                     </div>
//                 </div>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["active-title"]}`}>Xác nhận lộ trình</div>
//                     <div className = {styles["next-step"]}>
//                         <div className={styles.text}>2</div>
//                     </div>
//                 </div>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["inactive-title"]}`}>Thông tin hành khách</div>
//                     <div className = {styles["empty-step"]}>
//                         <div className={styles.text}>3</div>
//                     </div>
//                 </div>
//                 <div className =  {styles["step-block"]}>
//                     <div className={`${styles["title"]} ${styles["inactive-title"]}`}>Thanh toán</div>
//                     <div className = {styles["empty-step"]}>
//                         <div className={styles.text}>4</div>
//                     </div>
//                 </div>
//                 <div className={styles["current-line"]}></div>
//                 <div className={styles["empty-line-1"]}></div>
//                 <div className={styles["empty-line-2"]}></div>
// </div>