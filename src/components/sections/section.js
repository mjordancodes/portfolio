import React from 'react'
import styles from './section.module.scss'

const Section = ({ children, title }) => (
  <section className={styles.topic}>
    <header>
      <h2>{title}</h2>
    </header>
    {children}
  </section>
)

export default Section
