import React from 'react'
import styles from './landing.module.scss'
import { FaChevronDown } from 'react-icons/fa';

const Landing = ({ name, tagline }) => (
  <header className={styles.splash}>
    <h1 className={styles.statement}>
      <span className={styles.who}>{name}</span>
      {tagline}
    </h1>
    <a href="/" className={styles.scroll}>
      <FaChevronDown />
    </a>
  </header>
)

export default Landing
