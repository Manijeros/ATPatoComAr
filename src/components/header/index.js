import PropTypes from "prop-types"
import React from "react"

import ButtonLink from "../buttonLink"

import Logo from "./images/logo.inline.svg"
import styles from "./styles.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.headerHero}>
    <nav className={styles.navBar}>
      <ButtonLink to="/" label="Inicio" selected />
      <ButtonLink to="/reglamento" label="Reglamento" />
      <ButtonLink to="/rankings" label="Rankings" />
    </nav>
    <Logo className={styles.logo} />
    <h1 className={styles.title}>Torneos presenciales de</h1>
    <h1>Duck Game en Buenos Aires</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
