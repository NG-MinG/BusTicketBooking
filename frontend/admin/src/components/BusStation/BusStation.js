import styles from "./BusStation.module.css";
import FilterIcon from "../../assets/svg/Account/filter.svg";
import DeleteIcon from "../../assets/svg/Account/delete.svg";
import EditIcon from "../../assets/svg/Station/edit.svg";
import AddIcon from "../../assets/svg/Station/add.svg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const BusStation = () => {
  //Active, inactive modal
  const [show, setShow] = useState(false);
  const [createShow, setCreateShow] = useState(false);

  //Pass data to modal
  const [modalData, setModalData] = useState("");

  //Handle state of modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCreateClose = () => setCreateShow(false);
  const handleCreateShow = () => setCreateShow(true);

  //Handle data from database
  const [stationData, setstationData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [id, setId] = useState([]);

  //Use for edit station
  const [station, setStation] = useState({
    place: "",
    oldname: "",
    name: "",
    address: "",
    phone: "",
  });

  const handleInit = (e, place_p, oldname_p)=>{
    setStation((prev) => ({ ...prev, place: place_p, oldname: oldname_p}));
  }

  const handleChange = (e) => {
    setStation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_ipAddress + "/admin/getstation")
      .then((res) => {
        setstationData(res.data.data.station);
        setLocationData(res.data.data.location);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onEdit = (e, id) =>{
    e.preventDefault();
    const bodyData = {...station}
    axios.post(process.env.REACT_APP_ipAddress + `/admin/editstation/${id}`, bodyData)
    .then((res) => {
      setstationData(res.data.data.station)
    }).catch(error => {
      console.log(error)
    })
  }

  // const onDelete = (id) =>{
  //   axios.post(process.env.REACT_APP_ipAddress + `/admin/deleteaccount/${id}`)
  //   .then((res) => {
  //     setstationData(res.data.data.account)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }

  return (
    <div className={styles["a"]}>
      <div className={styles["header-container"]}>
        <p>TRẠM XE</p>
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
              <th>Địa điểm</th>
              <th>Trạm xe</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
              <th className={styles["small-space"]}></th>
              <th className={styles["small-space"]}></th>
            </tr>
          </thead>

          <tbody>
            {stationData.map((data) => (
              <tr>
                <td>{data.location}</td>
                <td>{data.place}</td>
                <td>{data.address}</td>
                <td>{data.phone}</td>
                <td>
                  <a
                    onClick={() => {
                      setShow(true);
                      setModalData(data);
                      setId(data._id);
                      handleInit(data._id, data.name)
                    }}
                  >
                    <img src={EditIcon} />
                  </a>
                </td>

                <td>
                  <a>
                    <img src={DeleteIcon} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <div className={styles["modal-head"]}>CHỈNH SỬA TRẠM XE</div>
          </Modal.Header>
          <Modal.Body>
            <form
              className={styles["modal-body-container"]}
              action=""
              method="POST"
            >
              <div className={styles["modal-row-container"]}>
                <div>Địa điểm</div>
                <select name="place" id="place" onChange={handleChange}>
                  {locationData.map(option=>(
                    <option value={option.location}>{option.location}</option>
                  ))}
                </select>
              </div>
              <div className={styles["modal-row-container"]}>
                <div>Địa chỉ</div>
                <input
                  type="text"
                  name="address"
                  value={modalData.address}
                  required
                  onChange={handleChange}
                ></input>
              </div>
              <div className={styles["modal-row-container"]}>
                <div>Số điện thoại</div>
                <input
                  type="text"
                  name="phone"
                  value={modalData.phone}
                  required
                  onChange={handleChange}
                ></input>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className={styles["modal-cancel-button"]}
              onClick={handleClose}
            >
              <div>Hủy</div>
            </button>

            <button
              className={styles["modal-save-button"]}
              onClick={handleClose}
            >
              <div>Lưu thay đổi</div>
            </button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className={styles["foot-new"]}>
        <a className={styles["add-button"]} onClick={setCreateShow}>
          <div>THÊM MỚI </div>
          <img src={AddIcon} />
        </a>
      </div>

      <Modal show={createShow} onHide={handleCreateClose}>
        <Modal.Header>
          <div className={styles["modal-head"]}>TẠO TRẠM XE</div>
        </Modal.Header>
        <Modal.Body>
          <form
            className={styles["modal-body-container"]}
            action=""
            method="POST"
          >
            <div className={styles["modal-row-container"]}>
              <div>Địa điểm</div>
              <select name="place" id="place">
                <option value="tphcm">TP. Hồ Chí Minh</option>
                <option value="travinh">Trà Vinh</option>
                <option value="bentre">Bến Tre</option>
                <option value="longan">Long An</option>
              </select>
            </div>
            <div className={styles["modal-row-container"]}>
              <div>Địa chỉ</div>
              <input
                type="text"
                name="address"
                placeholder="Nhập địa chỉ"
                // value={modalData.address}
              ></input>
            </div>
            <div className={styles["modal-row-container"]}>
              <div>Số điện thoại</div>
              <input
                type="text"
                name="phone"
                placeholder="Nhập số điện thoại"
                // value={modalData.phone}
              ></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={styles["modal-cancel-button"]}
            onClick={handleCreateClose}
          >
            <div>Hủy</div>
          </button>

          <button
            className={styles["modal-save-button"]}
            onClick={handleCreateClose}
          >
            <div>Lưu thay đổi</div>
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BusStation;
