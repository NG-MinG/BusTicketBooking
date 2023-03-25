import styles from "./AdminPage.module.css";
import { NavLink, Outlet } from "react-router-dom";

import DashBoardIcon from "../assets/svg/sidebar/dashboard.svg";
import ActiveIcon from "../assets/svg/sidebar/active.svg";
import AccountIcon from "../assets/svg/sidebar/account.svg";
import BusTypeIcon from "../assets/svg/sidebar/bustype.svg";
import BusStationIcon from "../assets/svg/sidebar/busstation.svg";
import BusRouteIcon from "../assets/svg/sidebar/busroute.svg";
import Ticket from "../assets/svg/sidebar/ticket.svg";

const AdminPage = () => {
  const sidebarData = [
    {
      icon: DashBoardIcon,
      title: "Dashboard",
      path: "/admin/dashboard"
    },
    {
      icon: AccountIcon,
      title: "Tài khoản",
      path: "/admin/account"
    },
    {
      icon: BusTypeIcon,
      title: "Loại xe",
      path: "/admin/bustype"
    },
    {
      icon: BusStationIcon,
      title: "Trạm xe",
      path: "/admin/busstation"
    },
    {
      icon: BusRouteIcon,
      title: "Tuyến xe",
      path: "/admin/busroute"
    },
    {
      icon: Ticket,
      title: "Vé xe",
      path: "/admin/ticket"
    },
  ]

  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["menu-container"]}>
          {sidebarData.map((data) => (
            <NavLink to={data.path} className={styles["menu-content"]} style={({ isActive }) => {
              return isActive ? { fontWeight: 650 } : {}
            }}>

              {({ isActive }) => {
                return isActive ?
                  <>
                    <div className={styles["sub-menu-content"]}>
                      <img src={data.icon} className={styles["meun-icon"]}></img>
                      <div className={styles["menu-text"]}>{data.title}</div>
                    </div>
                    <img src={ActiveIcon} style={{ "margin-left": "1.5rem" }} className={styles["meun-icon"]} />
                  </> :
                  <>
                    <div className={styles["sub-menu-content"]}>
                      <img src={data.icon} className={styles["meun-icon"]}></img>
                      <div className={styles["menu-text"]}>{data.title}</div>
                    </div>
                  </>
              }}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPage;
