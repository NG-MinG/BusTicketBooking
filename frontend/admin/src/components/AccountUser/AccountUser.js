import styles from "./AccountUser.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as DashBoardIcon } from "../../assets/svg/Dashboard/dashboard.svg";
import { ReactComponent as ActiveIcon } from "../../assets/svg/Dashboard/active.svg";

const AccountUser = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["menu-container"]}>
          <NavLink to="/admin/account" className={styles["menu-content"]}>
            <DashBoardIcon className={styles["meun-icon"]} />
            <div className={styles["menu-text"]}>Dashboard</div>
            <ActiveIcon className={styles["meun-icon"]} />
            <ActiveIcon className={styles["meun-icon"]} />
          </NavLink>
        </div>
      </div>
      <div className={styles["content-container"]}></div>
    </div>
  );
};

export default AccountUser;
