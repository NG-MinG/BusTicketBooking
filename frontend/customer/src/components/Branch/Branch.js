import React, { useEffect, useState } from 'react'
import styles from './Branch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BranchItem from './BranchItem/BranchItem'
import axios from 'axios'

export default function Branch() {

  const [branches, setBranches] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_ipAddress + '/bus/v1/station/stations').then((res) => {
      // setData(res.data.data.user)
      setBranches(res.data.data.stations)
      // setData(res.data.data.schedules)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className={styles.Branch}>
      <p className={styles.title}>Chi nhánh của chúng tôi</p>
      <div className={styles.search}>
        <input placeholder="Tìm chi nhánh..." />
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#A2ABB3', fontSize: '2.2rem', marginLeft: '-3.5rem', cursor: 'pointer' }} />
      </div>
      <div className={styles.table}>
        {branches.map((value, index) => (
          <BranchItem key={index} value={value} />
        ))}
      </div>
    </div>
  )
}
