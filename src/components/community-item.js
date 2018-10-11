import React from 'react'
import styles from './community-item.module.scss'

const Community = ({ children, title, image }) => (
  <article>
    <h3 className={styles.group}>{title}</h3>
    <img src={image} alt="logo" />
    {children}
  </article>
)

export default Community
