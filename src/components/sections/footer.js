import React from 'react'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.content}>
    <nav className={styles.footerNav}>
      <a href="/">Home</a>
      <a href="/now">Now</a>
      <a href="/rubber-ducks">Rubber Ducks</a>
    </nav>

    <hr />

    <p className={styles.copy}>&copy; 2018 mJordan.codes</p>
  </footer>
)

export default Footer
