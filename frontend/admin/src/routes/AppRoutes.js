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
        <>
            <AdminPage />
            <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/account" element={<AccountUser />} />
                <Route path="/admin/bustype" element={<BusType />} />
                <Route path="/admin/busstation" element={<BusStation />} />
                <Route path="/admin/busroute" element={<BusRoute />} />
                <Route path="/admin/ticket" element={<Ticket />} />
            </Routes>
        </>
    )
}

export default AppRoutes;   