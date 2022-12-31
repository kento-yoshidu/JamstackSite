import React, { useEffect } from "react"
import { Link } from "gatsby"

import Styles from "../styles/style.module.scss"
import View from "../components/viewList.module.scss"

import InterSectionObserver from "../lib/IO"
import ViewList from "../components/viewList"

const IndexPage = () => {
  useEffect(() => {
    InterSectionObserver()
  }, [])
  
  return (
    <div className={Styles.allWrapper}>
      <nav className={Styles.nav}>
        <ul className={Styles.navList}>
          <li className={Styles.navItem}><Link to="#">HOME</Link></li>
          <li className={Styles.navItem}><a href="#">Architecture</a></li>
          <li className={Styles.navItem}><a href="#">Sample Sites</a></li>
          <li className={Styles.navItem}><a href="#">Blog Article</a></li>
        </ul>
      </nav>

      <ViewList />

      <header className={`${Styles.header} ${View.view}`} id="view1">
        <h1 className={Styles.headerTitle}>
          <span className={Styles.neon}>Jamstack</span>なWebサイトを構築してみた
        </h1>

        <p className={Styles.headerText}>2022年度中に10個の<span className={Styles.neon}>Jamstack</span>サイトを作成することを目標にしています(努力目標)。</p>

        <ul className={Styles.headerBox}>
          <li className={Styles.boxItem}>Static Site Generator</li>
          <li className={Styles.boxItem}><span className={Styles.charGradient}>&</span></li>
          <li className={Styles.boxItem}>HeadlessCMS<br />Text file</li>
          <li className={Styles.boxItem}><span className={Styles.charGradient}>&</span></li>
          <li className={Styles.boxItem}>Hosting Web Service</li>
        </ul>

        <div className={Styles.scroll}>SCROLL</div>
      </header>

      <section className={`${Styles.section} ${View.view} ${Styles.view2}`} id="view2">
        <h2 className={Styles.sectionTitle}>Architecture</h2>
        <div className={Styles.container}>
          <div className={Styles.box}>
            <span></span>
            <div className={Styles.content}>
              <h3>Morden Web Framework</h3>
              <p>NextJSやNuxt.js、Gatsbyなどのフレームワークの機能を使い、HTMLやCSSなどの静的ファイルを書き出します。</p>
            </div>
          </div>

          <div className={Styles.box}>
            <span></span>
            <div className={Styles.content}>
              <h3>Headless CMS</h3>
              <p>動的なデータはHeadless CMSサービスを使って管理します。データベースを持つ必要はありません。</p>
            </div>
          </div>

          <div className={Styles.box}>
            <span></span>
            <div className={Styles.content}>
              <h3>CDN</h3>
              <p>静的ファイルはCDNサービスを使って配信します。バックエンドを持たないJamstackならではのメリットです。</p>
            </div>
          </div>
        </div>

        <table className={Styles.archTable}>
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

      <section className={`${Styles.section} ${Styles.view} ${Styles.view3}`} id="view3">
        <h2 className={Styles.sectionTitle}>Sample Sites</h2>

        <p className={Styles.text}>※ もはやJamstackと呼べないものも含まれているかもしれませんがご了承ください。</p>

        <div className={Styles.wrapper}>

          <a
            className={Styles.content}
            href="https://www.toriwatari.work/"
            target="_blink"
          >
            <div className={`${Styles.pageNumber} ${Styles.page1}`}>
              <span></span>
              <h4>#01</h4>
            </div>
            <div className={Styles.setumei}>
              <h3>Portfolio Site</h3>
              <p>ポートフォリオサイトです。Next.jsで作成しました。</p>
            </div>
          </a>

          <a
            className={Styles.content}
            href="https://blog.toriwatari.work/"
            target="_blink"
          >
            <div className={`${Styles.pageNumber} ${Styles.page2}`}>
              <span></span>
              <h4>#02</h4>
            </div>
            <div className={Styles.setumei}>
              <h3>鳥に生まれることができなかった人へ</h3>
              <p>GatsbyとMarkdownファイルで個人ブログを作成しました。</p>
            </div>
          </a>

          <a
            className={Styles.content}
            href="https://snipet.gatsbyjs.io/"
            target="_blank"
          >
            <div className={`${Styles.pageNumber} ${Styles.page3}`}>
              <span></span>
              <h4>#03</h4>
            </div>
            <div className={Styles.setumei}>
              <h3>スニペット置き場</h3>
              <p>GatsbyとMarkdownファイルで、ちょっとしたスニペットを保管するサイトを作成しました。</p>
            </div>
          </a>
        </div>
      </section>

      <section className={`${Styles.section} ${Styles.view}`} id="view4">
        <br />
      </section>
    </div>
  )
}

export default IndexPage
