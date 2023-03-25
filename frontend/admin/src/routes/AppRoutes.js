import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import Dashboard from "../components/Dashboard/Dashboard"
import AccountUser from "../components/AccountUser/AccountUser"
import BusType from "../components/BusType/BusType"
import BusStation from "../components/BusStation/BusStation"
import BusRoute from "../components/BusRoute/BusRoute"
import Ticket from "../components/Ticket/Ticket"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminPage />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="account" element={<AccountUser />} />
                <Route path="bustype" element={<BusType />} />
                <Route path="busstation" element={<BusStation />} />
                <Route path="busroute" element={<BusRoute />} />
                <Route path="ticket" element={<Ticket />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;   