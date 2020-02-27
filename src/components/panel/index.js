import React from "react"

import styles from "./styles.module.css"

const Panel = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.top}></div>
    <div className={styles.main}>{children}</div>
    <div className={styles.bottom}></div>
  </div>
)

export default Panel
