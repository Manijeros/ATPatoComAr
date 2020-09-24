import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"

const Content = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
