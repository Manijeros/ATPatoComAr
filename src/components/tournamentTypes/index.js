import React from "react"

import Panel from "components/panel"

import styles from "./styles.module.css"

const TournamentTypes = () => (
  <Panel>
    <div className={styles.container}>
      <h2>Tipos de torneo</h2>
      <ul className={styles.list}>
        <li>
          <h4>PATO 250</h4>
          <p>8 participantes</p>
        </li>
        <li>
          <h4>PATO 500</h4>
          <p>16 participantes</p>
        </li>
        <li>
          <h4>MASTER PATO SERIES</h4>
          <p>32 participantes</p>
        </li>
        <li>
          <h4>PATO SLAM</h4>
          <p>64 participantes</p>
        </li>
      </ul>
    </div>
  </Panel>
)

export default TournamentTypes
