/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "components/seo"
import Header from "components/header"
import Footer from "components/footer"

import "./layout.css"

const Layout = ({ children, isHomePage, title }) => (
  <>
    <SEO title={title} />
    <Header title={title} bigHero={isHomePage} />
    <main
      style={{
        margin: `0 auto`,
      }}
    >
      {children}
    </main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHomePage: PropTypes.bool,
  title: PropTypes.string,
}

Layout.defaultProps = {
  isHomePage: false,
  title: "Home",
}

export default Layout
