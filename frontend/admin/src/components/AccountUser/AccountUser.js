import styles from "./AccountUser.module.css";
import FilterIcon from "../../assets/svg/Account/filter.svg";
import DeleteIcon from "../../assets/svg/Account/delete.svg";
import BanIcon from "../../assets/svg/Account/ban.svg";
import axios from 'axios'
import { useState } from "react";


const AccountUser = () => {

  const [accountData, setAccountData] = useState([])

  axios.get('127.0.0.1:5000/admin/getaccount').then((res) => {
    // setData(res.data.data.user)
    setAccountData(res.data.data.account)
    // setData(res.data.data.schedules)
  }).catch(error => {
    console.log(error)
  })

  console.log(accountData)
  // const accountData = [
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  //   {
  //     id: "a92i13490sa2kkawad",
  //     name: "Jonas Scheakmsakdwokas",
  //     gender: "Nam",
  //     birthday: "30/6/1995",
  //     mail: "20127525@student.hcmus.edu.vn",
  //     phone: "0803863927",
  //     address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
  //   },
  // ];

  return (
    <div className={styles["a"]}>
      <div className={styles["header-container"]}>
        <p>QUẢN LÝ TÀI KHOẢN</p>
        <div className={styles["sub-header-container"]}>
          <input></input>
          <a className={styles["search-button"]}>
            <div>TÌM KIẾM </div>
          </a>
          <a className={styles["filter-icon"]}>
            <img src={FilterIcon} />
          </a>
        </div>
      </div>
      <div className={styles["listAccount"]}>
        <table className={styles["table-containter"]}>
          <thead>
            <tr>
              <th>HỌ TÊN</th>
              <th>GIỚI TÍNH</th>
              <th>NGÀY SINH</th>
              <th>EMAIL</th>
              <th>SỐ ĐIỆN THOẠI</th>
              <th>ĐỊA CHỈ</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {accountData.map((data) => (
              <tr>
                <td>{data.fullname}</td>
                <td>{data.gender}</td>
                <td>{data.dob}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>
                  <a>
                    <img src={DeleteIcon} />
                  </a>
                </td>
                <td>
                  <a>
                    <img src={BanIcon} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AccountUser;
