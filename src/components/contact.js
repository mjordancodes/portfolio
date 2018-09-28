import React from 'react'
import styles from './contact.module.scss'
import { 
  FaGithubAlt, 
  FaLinkedin, 
  FaCodepen,
  FaInstagram,
  FaKeybase,
  FaTwitter,
  FaYoutube } 
  from 'react-icons/fa'

const Contact = ({ title, url }) => (

  <div className={styles.contact}>
    <span className="sr-only">{title}</span>
    <a href={url}>
      { 
        title === 'CodePen' ? <FaCodepen /> 
        : title === 'GitHub' ? <FaGithubAlt />
        : title === 'Instagram' ? <FaInstagram />
        : title === 'Keybase' ? <FaKeybase />
        : title === 'Linkedin' ? <FaLinkedin />
        : title === 'Twitter' ? <FaTwitter />
        : title === 'YouTube' ? <FaYoutube />
        : <span>{title}</span>
      }
      </a>
  </div>
)

export default Contact
