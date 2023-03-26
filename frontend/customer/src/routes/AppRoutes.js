import { Routes, Route, Navigate } from "react-router-dom";
import TicketBookingPage from "../pages/TicketBookingPage/TicketBookingPage";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"
import Information from '../components/UserProfile/Information/Information'
import EditInformation from '../components/UserProfile/EditInformation/EditInformation'
import ChangePassword from '../components/UserProfile/ChangePassword/ChangePassword'
import MyTicket from '../components/UserProfile/MyTicket/MyTicket'
import TicketHistory from "../components/UserProfile/TicketHistory/TicketHistory";
import Schedule from "../components/Schedule/Schedule";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/ticket-booking" element={<TicketBookingPage />}>
            </Route>
            <Route path="/user-profile" element={<UserProfilePage />}>
                <Route index element={<Information />} />
                <Route path='edit-information' element={<EditInformation />} />
                <Route path='change-password' element={<ChangePassword />} />
                <Route path='my-ticket' element={<MyTicket />} />
                <Route path='ticket-history' element={<TicketHistory />} />
            </Route>
            <Route path="/schedule" element={<Schedule />} >
            </Route>
        </Routes>)
}

export default AppRoutes;   