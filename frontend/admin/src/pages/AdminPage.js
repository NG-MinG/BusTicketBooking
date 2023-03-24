import styles from "./AdminPage.module.css";
import { NavLink } from "react-router-dom";
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
      title: "Dashboard"
    },
    {
      icon: AccountIcon,
      title: "Tài khoản"
    },
    {
      icon: BusTypeIcon,
      title: "Loại xe"
    },
    {
      icon: BusStationIcon,
      title: "Trạm xe"
    },
    {
      icon: BusRouteIcon,
      title: "Tuyến xe"
    },
    {
      icon: Ticket,
      title: "Vé xe"
    },
  ]

  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["menu-container"]}>
          {sidebarData.map((data) => (
            <NavLink to="/admin/account" className={styles["menu-content"]}>
              <div className={styles["sub-menu-content"]}>
                <img src={data.icon} className={styles["meun-icon"]}></img>
                <div className={styles["menu-text"]}>{data.title}</div>
              </div>
              <img src={ActiveIcon} style={{ "margin-left": "1.5rem" }} className={styles["meun-icon"]}></img>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles["content-container"]}></div>
    </div>
  );
};

export default AdminPage;
