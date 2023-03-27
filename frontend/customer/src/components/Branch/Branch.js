import React from 'react'
import styles from './Branch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BranchItem from './BranchItem/BranchItem'

export default function Branch() {

  const branches = [
    {
      diem: 'TP.Hồ Chí Minh',
      benxe: [
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8,TP. Hồ Chí Minh',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8,TP. Hồ Chí Minh',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8,TP. Hồ Chí Minh',
          sodienthoai: '0976975548'
        },
      ]
    },
    {
      diem: 'Trà Vinh',
      benxe: [
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Trà Vinh',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Trà Vinh',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Trà Vinh',
          sodienthoai: '0976975548'
        },
      ]
    },
    {
      diem: 'Bến Tre',
      benxe: [
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Bến Tre',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Bến Tre',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Bến Tre',
          sodienthoai: '0976975548'
        },
      ]
    },
    {
      diem: 'Bến Tre',
      benxe: [
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Bến Tre',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Bến Tre',
          sodienthoai: '0976975548'
        },
        {
          diachi: '1647 Phạm Thế Hiển, phường 6, quận 8, Bến Tre',
          sodienthoai: '0976975548'
        },
      ]
    },
  ]

  return (
    <div className={styles.Branch}>
      <p className={styles.title}>Chi nhánh của chúng tôi</p>
      <div className={styles.search}>
        <input placeholder="Tìm chi nhánh..." />
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#A2ABB3', fontSize: '2.2rem', marginLeft: '-3.5rem' }} />
      </div>
      <div className={styles.table}>
        {branches.map((value, index) => (
          <BranchItem key={index} value={value} />
        ))}
      </div>
    </div>
  )
}
