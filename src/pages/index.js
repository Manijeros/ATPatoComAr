import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ButtonLink from "../components/buttonLink"
import Panel from "../components/panel"
import Separator from "../components/separator"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <h1>ATPATO</h1>
      <h2>Torneos presenciales de Duck Game en Buenos Aires</h2>
    </header>
    <main>
      <section id="info">
        <h2>Qué es la ATPato?</h2>
        <p>
          Somos un grupo de jugadores amateur de{" "}
          <a href="https://store.steampowered.com/app/312530/Duck_Game/">
            Duck Game
          </a>
          &nbsp;que en un estado de emoción violenta decidimos llevar la manija
          al siguiente nivel y organizar torneos presenciales para juntarnos,
          levantar un poco el nivel competitivo y sobre todo divertirnos jugando
          al PATO
        </p>
        <h3>Registrate en la ATPato</h3>
        <p>
          <strong>Sos un verdadero PATO?</strong> Querés sumarte a una liga en
          desarrollo y batirte a duelo en un torneo con los mejores? Querés
          enterarte cuándo y dónde son los próximos torneos del ATPato Tour?
        </p>
        <ButtonLink
          label="Registrate!"
          to="https://www.meetup.com/ATPato-Torneos-de-Duck-Game-en-BA/"
        />
      </section>
      <section id="nextTournament">
        <Panel>
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
        </Panel>
      </section>
      <Separator />
    </main>
  </Layout>
)

export default IndexPage
