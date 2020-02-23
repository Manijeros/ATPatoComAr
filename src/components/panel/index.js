import React from "react"

import styles from "./styles.module.css"

const Panel = ({ children }) => (
  <div class={styles.container}>
    <div class={styles.top}></div>
    <div class={styles.main}>{children}</div>
    <div class={styles.bottom}></div>
  </div>
)

export default Panel
