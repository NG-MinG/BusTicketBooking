import {Routes, Route, Navigate} from "react-router-dom";
import TicketBookingPage from "../pages/TicketBookingPage/TicketBookingPage";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
    <Routes>
        <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path = "/ticket-booking" element = {<TicketBookingPage/>} />
        </Route>
    </Routes>)
}

export default AppRoutes;   