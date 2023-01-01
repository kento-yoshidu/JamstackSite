import { useState } from 'react'

import Styles from "./styles/style.module.scss"

function App() {
  return (
    <>
      <nav className={Styles.nav}>
        <ul className={Styles.navList}>
          <li className={Styles.navItem}>HOME</li>
          <li className={Styles.navItem}><a href="#">Architecture</a></li>
          <li className={Styles.navItem}><a href="#">Sample Sites</a></li>
          <li className={Styles.navItem}><a href="#">Blog Article</a></li>
        </ul>
      </nav>
    </>
  )
}

export default App
