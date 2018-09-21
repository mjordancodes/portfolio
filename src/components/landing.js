import React from 'react'
import styles from './landing.module.scss'


const Landing = ({ name, tagline }) => (
  <div className={styles.thing}>
    <h1 class="statement">
      <span class="who">{name}</span>
      {tagline}
    </h1>
  </div>
)

export default Landing