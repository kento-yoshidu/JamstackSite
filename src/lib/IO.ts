import * as Styles from "../components/viewList.module.scss"

const InterSectionObserver = () => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0
  }

  const observer = new IntersectionObserver(doWhenIntersect, options)

  const boxes = document.querySelectorAll<HTMLElement>(`.${Styles.view}`)

  boxes.forEach((box: Element) => {
    observer.observe(box)
  })

  function doWhenIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        activateIndex(entry.target)
      }
    })
  }

  function activateIndex(element: Element) {
    // すでにアクティブになっている目次を選択
    const currentActiveIndex = document.querySelector<HTMLElement>(`#viewList .${Styles.active}`)

    // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove(Styles.active)
    }
    // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
    const newActiveIndex = document.querySelector<HTMLElement>(`li[data-li='${element.id}']`)
    newActiveIndex?.classList.add(Styles.active)
  }
}

export default InterSectionObserver
