import React from "react"
import LogoImage from "../../assets/img/logo.png"
import {menu} from "./menu"
import {Link} from "react-router-dom"

import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={LogoImage} alt="" height="18" width="124"/>
        </Link>
      </div>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <Link to={"/sign-up"}>
            <button className={styles["sign-up-button"]}>Sign Up</button>
          </Link>
        </div>
    </div>
  )
}

export default Header
