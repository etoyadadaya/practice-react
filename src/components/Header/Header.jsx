import React from 'react'
import LogoImage from '../../assets/img/react.svg'
import {menu} from "./menu"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss'

const Header = () => {
  const history = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoImage} alt="" height='50' width='60' />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button
            className={styles['login-button']}
            onClick={() => history('/about')}
          >Login</button>
          <button className={styles['sign-up-button']}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
