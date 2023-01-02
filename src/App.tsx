import NavStyles from "./styles/nav.module.scss"
import Styles from "./styles/style.module.scss"

function App() {
  return (
    <div className={Styles.allWrapper}>
      <nav className={NavStyles.nav}>
        <ul className={NavStyles.navList}>
          <li className={NavStyles.navItem}><a href="/">HOME</a></li>
          <li className={NavStyles.navItem}><a href="#">Architecture</a></li>
          <li className={NavStyles.navItem}><a href="#">Sample Sites</a></li>
          <li className={NavStyles.navItem}><a href="#">Blog Article</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default App
