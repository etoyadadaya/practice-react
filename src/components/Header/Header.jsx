import React from 'react'
import LogoImage from '../../assets/img/react.svg'
import {menu} from "./menu"

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoImage} alt="" height='50' width='60' />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button className={styles['login-button']}>Login</button>
          <button className={styles['sign-up-button']}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
