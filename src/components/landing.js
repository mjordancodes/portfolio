import React from 'react'
import styles from './landing.module.scss'

const Landing = ({ name, tagline }) => (
  <div>
    <h1 className={styles.statement}>
      <span className={styles.who}>{name}</span>
      {tagline}
    </h1>
  </div>
)

export default Landing