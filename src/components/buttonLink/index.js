import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"

const ButtonLink = ({ label, to, selected }) => (
  <Link
    className={`${styles.buttonLink} ${selected && styles.buttonLinkSelected}`}
    to={to}
  >
    {label}
  </Link>
)

ButtonLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  selected: PropTypes.bool,
}

ButtonLink.defaultProps = {
  selected: false,
}

export default ButtonLink
