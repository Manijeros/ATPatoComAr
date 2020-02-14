import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"

const NavLink = ({ label, to, selected }) => (
  <Link
    className={`${styles.navLink} ${selected && styles.navLinkSelected}`}
    to={to}
  >
    {label}
  </Link>
)

const Header = ({ siteTitle }) => (
  <header>
    <nav className={styles.navBar}>
      <NavLink to="/" label="Inicio" selected />
      <NavLink to="/reglamento" label="Reglamento" />
      <NavLink to="/rankings" label="Rankings" />
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
