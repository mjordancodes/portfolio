import React from 'react'
import styles from './header.module.scss'

const Header = () => (
  <header className={styles.content}>
    <div className={styles.logo}>mJordan</div>
    <nav className={styles.headerNav}>
      <a href="/blog">Blog</a>
      <a href="/now">Now</a>
    </nav>
  </header>
)

export default Header
