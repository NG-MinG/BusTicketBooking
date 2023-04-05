import styles from "./AdminLayout.module.css";
import { NavLink, Navigate, Outlet, Route, redirect, useLocation, useNavigate } from "react-router-dom";

import DashBoardIcon from "../assets/svg/sidebar/dashboard.svg";
import ActiveIcon from "../assets/svg/sidebar/active.svg";
import AccountIcon from "../assets/svg/sidebar/account.svg";
import BusTypeIcon from "../assets/svg/sidebar/bustype.svg";
import BusStationIcon from "../assets/svg/sidebar/busstation.svg";
import BusRouteIcon from "../assets/svg/sidebar/busroute.svg";
import Ticket from "../assets/svg/sidebar/ticket.svg";
import { useEffect, useState } from "react";

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
      path: "/admin/bus-type"
    },
    {
      icon: BusStationIcon,
      title: "Trạm xe",
      path: "/admin/bus-station"
    },
    {
      icon: BusRouteIcon,
      title: "Tuyến xe",
      path: "/admin/bus-route"
    },
    {
      icon: Ticket,
      title: "Vé xe",
      path: "/admin/manage-ticket",
    },
  ]

  const subData = [
    {
      title: "Quản lí vé xe",
      path: "/admin/manage-ticket/ticket"
    },
    {
      title: "Vé xe đã đặt",
      path: "/admin/manage-ticket/ticket-order"
    }
  ]

  const location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/admin/manage-ticket") navigate("/admin/manage-ticket/ticket")
  })

  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["menu-container"]}>
          {sidebarData.map((data, index) => (
            <NavLink to={data.path} className={styles["menu-content"]} style={({ isActive }) => {
              return isActive ? { color: "#ffffff" } : { color: "#B7B1B1" }
            }}>

              {({ isActive }) => {
                return isActive ?
                  <>
                    <div className={styles["sub-menu-content"]}>
                      <img src={data.icon} className={styles["meun-icon"]}></img>
                      <div className={styles["menu-text"]}>{data.title}</div>
                    </div>
                    <img src={ActiveIcon} style={{ "margin-left": "0.5rem" }} className={styles["meun-icon"]} />
                    {index === sidebarData.length - 1
                      &&
                      <div className={styles["ticket-item"]}>
                        {subData.map((data) => (
                          <NavLink to={data.path} className={styles["ticket-item-content"]}
                            style={({ isActive }) => { return (isActive) ? { color: "#ffffff" } : { color: "#B7B1B1" } }}
                          >{data.title}</NavLink>
                        ))}
                      </div>}
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
      <div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPage;
