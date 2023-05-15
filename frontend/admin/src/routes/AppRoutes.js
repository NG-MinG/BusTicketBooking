import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import AccountUserPage from "../pages/AccountUserPage/AccountUserPage";
import BusStationPage from "../pages/BusStationPage/BusStationPage";
import BusRoutePage from "../pages/BusRoutePage/BusRoutePage";
import ManageTicketPage from "../pages/ManageTicketPage/ManageTicketPage";
import ManageTicketOrderPage from "../pages/ManageTicketOrderPage/ManageTicketOrderPage";
import ManageTicketOrderEditPage from "../pages/ManageTicketOrderPage/ManageTicketOrderEditPage/ManageTicketOrderEditPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/admin' />} />
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="account" element={<AccountUserPage />} />
                <Route path="bus-station" element={<BusStationPage />} />
                <Route path="bus-route" element={<BusRoutePage />} />
                <Route path="manage-ticket" element={<ManageTicketPage />} />
                <Route path="manage-ticket/ticket" element={<ManageTicketPage />} />
                <Route path="manage-ticket/ticket-order" element={<ManageTicketOrderPage />} />
                <Route path="manage-ticket/ticket-order/edit/:id" element={<ManageTicketOrderEditPage />} />

            </Route>
        </Routes>
    )
}

export default AppRoutes;   