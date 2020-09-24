import React from "react"

import Content from "../content"
import ImageLink from "../ImageLink"
import Meetup from "../../images/Meetup.png"
import Youtube from "../../images/Youtube.png"

import styles from "./styles.module.css"

const Footer = () => (
  <footer>
    <div className={styles.footerBorder}></div>
    <div className={styles.container}>
      <Content>
        <div className={styles.inner}>
          <div className={styles.copyContainer}>
            <span className={styles.copyLabel}>
              Copyright &copy; SCVSoft - Todos los derechos reservados -
            </span>
            <a className={styles.mailTo} href="mailto:info@scvsoft.com">
              info@scvsoft.com
            </a>
          </div>
          <div className={styles.socialContainer}>
            <ImageLink
              href="https://www.meetup.com/ATPato-Torneos-de-Duck-Game-en-BA/"
              alt="Meetup"
              src={Meetup}
              style={{ height: 50 }}
            />
            <ImageLink
              href="https://youtube.com"
              alt="YouTube"
              src={Youtube}
              style={{ height: 30 }}
            />
          </div>
        </div>
      </Content>
    </div>
  </footer>
)

export default Footer
