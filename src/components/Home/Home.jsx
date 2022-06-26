import React from "react";
import Header from "../Header/Header"
import {Link} from "react-router-dom"
import Img from "../../assets/img/Home/meta 1.png"

import styles from "./Home.module.scss"

const Home = () => {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.firstSection}>
          <div className={styles.firstWrap}>
            <div className={styles.firstTitle}>
              Let’s explore<br/> your own <span className={styles.colorText}>metaverse</span><br/>world.
            </div>
            <div className={styles.firstInfo}>
              Ruang 3D di metaverse untuk bersosialisasi, belajar, kolaborasi,<br/>
              dan bermain melampaui apa yang bisa kita bayangkan.<br/>
              The Metaverse is the next evolution of social connection.
            </div>
            <div className={styles.firstButtons}>
              <Link to={"/sign-up"}>
                <div className={styles.firstButtonExplore}>Explore Now</div>
              </Link>
              <Link to={"/about"}>
                <div className={styles.firstButtonLearn}>Learn more</div>
              </Link>
            </div>
          </div>
          <div className={styles.firstImage}>
            <div className={styles.firstBorder}>
              <img className={styles.firstImg} src={Img} alt="" height="328" width="450"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
