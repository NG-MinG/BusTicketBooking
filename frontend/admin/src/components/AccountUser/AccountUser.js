import styles from "./AccountUser.module.css";
import FilterIcon from "../../assets/svg/Account/filter.svg";
import DeleteIcon from "../../assets/svg/Account/delete.svg";
import BanIcon from "../../assets/svg/Account/ban.svg";

const AccountUser = () => {
  const accountData = [
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
    {
      id: "a92i13490sa2kkawad",
      name: "Jonas Scheakmsakdwokas",
      gender: "Nam",
      birthday: "30/6/1995",
      mail: "20127525@student.hcmus.edu.vn",
      phone: "0803863927",
      address: "Chung cư 24/16, đường Võ Oanh, P.25, quận Bình Thạnh",
    },
  ]
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
      <table className={styles["table-containter"]}>
        <tr>
          <th>ID</th>
          <th>HỌ TÊN</th>
          <th>GIỚI TÍNH</th>
          <th>NGÀY SINH</th>
          <th>EMAIL</th>
          <th>SỐ ĐIỆN THOẠI</th>
          <th>ĐỊA CHỈ</th>
          <th></th>
          <th></th>
        </tr>
        {accountData.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.gender}</td>
            <td>{data.birthday}</td>
            <td>{data.mail}</td>
            <td>{data.phone}</td>
            <td>{data.address}</td>
            <td><a><img src={DeleteIcon}/></a></td>
            <td><a><img src={BanIcon}/></a></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AccountUser;
