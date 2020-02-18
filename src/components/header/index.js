import PropTypes from "prop-types"
import React from "react"

import ButtonLink from "../buttonLink"
import styles from "./styles.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav className={styles.navBar}>
      <ButtonLink to="/" label="Inicio" selected />
      <ButtonLink to="/reglamento" label="Reglamento" />
      <ButtonLink to="/rankings" label="Rankings" />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
