import React from 'react'
import styles from './contact-item.module.scss'
import { 
  FaCodepen,
  FaGithubAlt, 
  FaInstagram,
  FaKeybase,
  FaLinkedin, 
  FaTwitter,
  FaYoutube } 
  from 'react-icons/fa'

const Contact = ({ title, url, key }) => (

  <div className={styles.contact} key={key}>
    <span className="sr-only">{title}</span>
    <a href={url} target="_blank">
      { 
        title === 'CodePen' ? <FaCodepen /> 
        : title === 'GitHub' ? <FaGithubAlt />
        : title === 'Instagram' ? <FaInstagram />
        : title === 'Keybase' ? <FaKeybase />
        : title === 'LinkedIn' ? <FaLinkedin />
        : title === 'Twitter' ? <FaTwitter />
        : title === 'YouTube' ? <FaYoutube />
        : <span>{title}</span>
      }
      </a>
  </div>
)

export default Contact
