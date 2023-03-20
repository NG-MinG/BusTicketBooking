import {Routes, Route, Navigate} from "react-router-dom";
import TicketBookingPage from "../pages/TicketBookingPage/TicketBookingPage";

const AppRoutes = () => {
    return (
    <Routes>
        <Route path = "/ticket-booking" element = {<TicketBookingPage/>}>
        </Route>
    </Routes>)
}

export default AppRoutes;   