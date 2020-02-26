import React from "react"
import Panel from "../panel"

import styles from "./styles.module.css"
import Logo from "./SCVLogo.png"

const SponsorBadge = () => (
  <div>
    <Panel>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} />
        <div className={styles.label}>Host + IT Partner</div>
      </div>
    </Panel>
  </div>
)

export default SponsorBadge
