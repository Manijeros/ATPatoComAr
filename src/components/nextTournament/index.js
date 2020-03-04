import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Panel from "components/panel"
import ButtonLink from "components/buttonLink"

import styles from "./styles.module.css"

const NextTournament = () => {
  const data = useStaticQuery(graphql`
    query {
      gameplayImage: file(relativePath: { eq: "gameplay.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      newsduckImage: file(relativePath: { eq: "newsduck.png" }) {
        childImageSharp {
          fixed(height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section id="nextTournament">
      <Panel className={styles.container}>
        <Img
          className={styles.tournamentImage}
          fluid={data.gameplayImage.childImageSharp.fluid}
        />
        <div className={styles.inset}>
          <h3>Próximo Torneo</h3>
          <h4>ATPato 250 Open Febrero 2020</h4>
          <p>
            <strong>Fecha:</strong> 29 de Febrero 2020 - 19hs
          </p>
          <p>
            <strong>Lugar:</strong>{" "}
            <a href="https://goo.gl/maps/BSbDWydUZuNPekXV7">SCVSoft</a>
          </p>
          <ButtonLink
            label="Inscribite!"
            to="https://www.meetup.com/ATPato-Torneos-de-Duck-Game-en-BA/"
          />
          <div className={styles.newsduckImage}>
            <Img fixed={data.newsduckImage.childImageSharp.fixed} />
          </div>
        </div>
      </Panel>
    </section>
  )
}

export default NextTournament
