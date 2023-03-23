import {Routes, Route, Navigate} from "react-router-dom";
import AdminPage from "../pages/AdminPage";

const AppRoutes = () => {
    return (
    <Routes>
        <Route path = "/admin/account" element = {<AdminPage/>}>
        </Route>
    </Routes>)
}

export default AppRoutes;   