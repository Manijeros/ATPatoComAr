import React from "react"

import styles from "./styles.module.css"

const MultiColumn = ({ children }) => (
  <div class={styles.container}>{children}</div>
)

export default MultiColumn
