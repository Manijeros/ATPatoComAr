import React from "react"

import Layout from "../components/layout"

import MultiColumn from "../components/multiColumn"
import TournamentTypes from "../components/tournamentTypes"

const Reglamento = () => (
  <Layout title="Reglamento">
    <MultiColumn>
      <section>
        <p>
          <strong>
            El ATPato Tour consiste en torneos presenciales que aportan a sus
            competidores puntos para la PATO RACE.
          </strong>{" "}
          La cantidad de puntos depende del tamaño del torneo (cantidad de
          participantes) y la instancia que cada participante haya alcanzado en
          el mismo.
        </p>
        <p>
          Una vez anunciado un torneo se toman inscripciones al mismo. La
          organización aceptará todas las inscripciones, inclusive por encima
          del cupo de participantes del torneo.
        </p>
        <p>
          En caso de excederse la cantidad de participantes en el momento del
          torneo la organización puede decidir entre:
        </p>
        <ul>
          <li>
            Algún mecanismo ad-hoc de clasificación previa para llegar al tamaño
            del torneo.
          </li>
          <li>
            Ampliar el tamaño del torneo a un tamaño superior en caso de que
            aplique.
          </li>
        </ul>
        <p>
          En cualquier caso, todo pato que se presente en un torneo tiene
          garantizado jugar aunque sea una clasificación.
        </p>
      </section>
      <section>
        <p>
          El sorteo de grupos para la primer ronda de cada torneo se hace por un
          esquema de <strong>“sembrados”</strong> (el que se usa para el sorteo
          del mundial de fútbol, bah) donde los distintos{" "}
          <strong>“copones”</strong> se determinan segun el ranking{" "}
          <strong>PELO</strong>. El ranking PELO es un ranking simil ELO que
          computa todos los partidos oficiales jugados en la ATPato.
        </p>
        <p>
          <strong>
            Al final del año, los 8 mejores rankeados en la PATO RACE compiten
            en un torneo final especial, la PATO MASTERS FINALS.
          </strong>
        </p>
        <p>
          Además cada torneo se vuelve único independiente del tamaño
          modificando la “superficie” del juego (tamaño de ronda, cantidad de
          puntos para ganar, wall mode, randomness, etc). El formato y
          superficie de cada torneo se define al anunciar el mismo.
        </p>
        <TournamentTypes />
      </section>
    </MultiColumn>
  </Layout>
)

export default Reglamento
