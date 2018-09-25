import React from 'react'
import styles from './subone.module.scss'

const SubOne = ({ children, title, isFlex }) => (
  isFlex ? (
    <div className={[styles.flex, styles.fullWidth].join(' ')}>
      {children}
    </div>
    ) : (
      <div className={styles.fullWidth}>
        <h3>{title}</h3>
        {children}
      </div>
    )
)

export default SubOne
