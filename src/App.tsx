import ViewList from "./components/ViewList"

import Styles from "./styles/style.module.css"
import NavStyles from "./styles/nav.module.css"
import HeaderStyles from "./styles/header.module.css"
import ArchitectureStyles from "./styles/architecture.module.css"

function App() {
  return (
    <div className={Styles.allWrapper}>

      <ViewList />

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

      <section className={`${Styles.section} ${Styles.view2}`} id="view2">
        <h2 className={Styles.sectionTitle}>Architecture</h2>
        <div className={ArchitectureStyles.container}>
          <div className={ArchitectureStyles.box}>
            <span></span>
            <div className={ArchitectureStyles.content}>
              <h3>Morden Web Framework</h3>
              <p>NextJSやNuxt.js、Gatsbyなどのフレームワークの機能を使い、HTMLやCSSなどの静的ファイルを書き出します。</p>
            </div>
          </div>

          <div className={ArchitectureStyles.box}>
            <span></span>
            <div className={ArchitectureStyles.content}>
              <h3>Headless CMS</h3>
              <p>動的なデータはHeadless CMSサービスを使って管理します。データベースを持つ必要はありません。</p>
            </div>
          </div>

          <div className={ArchitectureStyles.box}>
            <span></span>
            <div className={ArchitectureStyles.content}>
              <h3>CDN</h3>
              <p>静的ファイルはCDNサービスを使って配信します。バックエンドを持たないJamstackならではのメリットです。</p>
            </div>
          </div>
        </div>

        <table className={ArchitectureStyles.archTable}>
          <tr>
            <th>SSG</th>
            <td>NextJS Gatsby Nuxt.js Gridsome SvelteKit</td>
          </tr>
          <tr>
            <th>Headless<br />CMS</th>
            <td>microCMS Contentful graphCMS prismic</td>
          </tr>
          <tr>
            <th>CDN</th>
            <td>AWS Amplify Netlify Vercel Gatsby Cloud</td>
          </tr>
        </table>
      </section>
    </div>
  )
}

export default App
