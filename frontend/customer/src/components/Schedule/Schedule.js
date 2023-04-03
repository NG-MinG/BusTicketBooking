import React from 'react'
import styles from './Schedule.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import ScheduleItem from './ScheduleItem/ScheduleItem'

export default function Schedule() {
  const schedule = [
    {
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      loaixe: 'Limousine',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Trà Vinh',
      loaixe: 'Giường',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'Bến Tre',
      diemden: 'TP.Hồ Chí Minh',
      loaixe: 'Limousine',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'Trà Vinh',
      diemden: 'TP.Hồ Chí Minh',
      loaixe: 'Giường',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    },
    {
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      loaixe: 'Limousine',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Trà Vinh',
      loaixe: 'Giường',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'Bến Tre',
      diemden: 'TP.Hồ Chí Minh',
      loaixe: 'Limousine',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'Trà Vinh',
      diemden: 'TP.Hồ Chí Minh',
      loaixe: 'Giường',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Bến Tre',
      loaixe: 'Limousine',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'TP.Hồ Chí Minh',
      diemden: 'Trà Vinh',
      loaixe: 'Giường',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'Bến Tre',
      diemden: 'TP.Hồ Chí Minh',
      loaixe: 'Limousine',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    }, {
      diemdi: 'Trà Vinh',
      diemden: 'TP.Hồ Chí Minh',
      loaixe: 'Giường',
      quangduong: '100KM',
      thoigianhanhtrinh: '19h'
    },
  ]

  return (
    <div className={styles.Schedule}>
      <p className={styles.searchTitle}>Tìm chuyến xe</p>
      <div className={styles.search}>
        <input placeholder="Nhập điểm đi..." />
        <FontAwesomeIcon icon={faArrowRightLong} style={{ color: '#417DD8', fontSize: '4.5rem' }} />
        <input placeholder="Nhập điểm đến..." />
      </div>
      <div className={styles.table}>
        <div className={styles.header}>
          <p>Tuyến xe</p>
          <p>Loại xe</p>
          <p>Quãng đường</p>
          <p>Thời gian hành trình</p>
        </div>
        <div className={styles.content}>
          <p>Đi từ TP.Hồ Chí Minh đến</p>
          <div className={styles.fromHCM}>
            {schedule.map((value, index) => (
              value.diemdi === "TP.Hồ Chí Minh" && <ScheduleItem key={index} diem={value.diemden} value={value} />
            ))}
          </div>
          <p>Đi đến TP.Hồ Chí Minh từ</p>
          <div className={styles.toHCM}>
            {schedule.map((value, index) => (
              value.diemden === "TP.Hồ Chí Minh" && <ScheduleItem key={index} diem={value.diemdi} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
