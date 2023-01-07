import Styles from "./styles/style.module.scss"
import NavStyles from "./styles/nav.module.css"
import HeaderStyles from "./styles/header.module.css"

function App() {
  return (
    <div className={Styles.allWrapper}>
      <nav className={NavStyles.nav}>
        <ul className={NavStyles.navList}>
          <li className={NavStyles.navItem}><a href="#view1">HOME</a></li>
          <li className={NavStyles.navItem}><a href="#">Architecture</a></li>
          <li className={NavStyles.navItem}><a href="#">Sample Sites</a></li>
          <li className={NavStyles.navItem}><a href="#">Blog Article</a></li>
        </ul>
      </nav>

      <header className={`${HeaderStyles.header}`} id="view1">
        <h1 className={HeaderStyles.headerTitle}>
          <span className={HeaderStyles.neon}>Jamstack</span>なWebサイトを構築してみた
        </h1>

        <p className={HeaderStyles.headerText}>10個の<span className={HeaderStyles.neon}>Jamstack</span>サイトを作成することを目標にしています(努力目標)。</p>

        <ul className={HeaderStyles.headerBox}>
          <li className={HeaderStyles.boxItem}>Web Framework</li>
          <li className={HeaderStyles.boxItem}><span className={Styles.charGradient}>&</span></li>
          <li className={HeaderStyles.boxItem}>Headless CMS</li>
          <li className={HeaderStyles.boxItem}><span className={Styles.charGradient}>&</span></li>
          <li className={HeaderStyles.boxItem}>Hosting Web Service</li>
        </ul>

        <div className={HeaderStyles.scroll}>SCROLL</div>
      </header>
    </div>
  )
}

export default App
