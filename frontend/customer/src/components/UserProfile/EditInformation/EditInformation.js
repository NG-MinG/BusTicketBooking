import React, { useState, useEffect } from 'react'
import styles from './EditInformation.module.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'


export default function EditInformation() {
  const [information, setInformation] = useState()

  // const [nameError,setNameError] = useState(false);
  // const []


  // useEffect(() => {
  //   if (cookie.get("TWJ")) {
  //     const headers = {
  //       'Authorization': `Bearer ${cookie.get("TWJ")}`
  //     }
  //     axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/products/get-products', { headers: headers }).then((res) => {
  //       setData(JSON.parse(res.data.data.productData))
  //       console.log(JSON.parse(res.data.data.productData))
  //       setProductsAmount(JSON.parse(res.data.data.productData))
  //     }).catch(error => {
  //       console.log(error)
  //     })
  //   }
  // }, [])


  useEffect(() => {
    axios.get(process.env.REACT_APP_ipAddress + '/bus/v1/user/userProfile').then((res) => {
      setInformation(res.data.data.user)
      // console.log(res.data.data.user)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const handleSave = (event) => {
    event.preventDefault()

    axios.patch(process.env.REACT_APP_ipAddress + '/bus/v1/user/updateProfile', information).then((res) => {
      console.log('Successfully!!!')
    }).catch(error => {
      // console.log(error)
      let a = error.response.data.message
      console.log(a)
    })
  }

  const handleChangeInput = (e) => {
    setInformation(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form className={styles.EditInformation} onSubmit={handleSave}>
      <div className={styles['title']}>
        <p>Họ và tên:</p>
        <p>Số điện thoại:</p>
        <p>Email:</p>
        <p>Ngày sinh:</p>
        <p>Giới tính:</p>
        <p>Địa chỉ:</p>
      </div>
      <div className={styles['content']}>
        <input name='fullname' onChange={handleChangeInput} value={information.fullname} />
        <input name='phone' onChange={handleChangeInput} value={information.phone} />
        <input name='email' onChange={handleChangeInput} value={information.email} />
        <input name='dob' onChange={handleChangeInput} value={information.dob} />
        <input name='gender' onChange={handleChangeInput} value={information.gender} />
        <input name='address' onChange={handleChangeInput} value={information.address} />
      </div>
      <div className={styles['avatar']}>
        <div className={styles.addIcon}>
          <FontAwesomeIcon icon={faPlus} style={{ color: '#417DD8', fontSize: '3.5rem' }} />
        </div>
        <img alt="" src='' />
      </div>
      <button type='submit'>save</button>
    </form>
  )
}
