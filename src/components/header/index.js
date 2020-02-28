import PropTypes from "prop-types"
import React from "react"

import ButtonLink from "../buttonLink"

import Logo from "./images/logo.inline.svg"
import styles from "./styles.module.css"

const Header = ({ title, bigHero }) => (
  <header className={bigHero ? styles.headerHero : styles.regularHeader}>
    <nav className={styles.navBar}>
      <ButtonLink to="/" label="Inicio" />
      <ButtonLink to="/reglamento" label="Reglamento" />
      <ButtonLink to="/rankings" label="Rankings" />
    </nav>
    <Logo className={bigHero ? styles.logo : styles.logoSmall} />
    {bigHero && <h1 className={styles.title}>Torneos presenciales de</h1>}
    {bigHero && <h1>Duck Game en Buenos Aires</h1>}
    {!bigHero && <h1>{title}</h1>}
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  bigHero: PropTypes.bool,
}

Header.defaultProps = {
  title: ``,
  bigHero: false,
}

export default Header
