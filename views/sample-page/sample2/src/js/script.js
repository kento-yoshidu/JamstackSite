document.addEventListener('DOMContentLoaded', () => {

  // 画面左のサムネイル一覧
  const thums = document.getElementsByClassName('thum');

  // item一覧
  const items = document.getElementsByClassName('item')

  for (let i = 0; i < thums.length; i++) {

    thums[i].addEventListener('click', (e) => {

      let clickedThum = e.currentTarget;
      let toActiveItem = document.getElementById(clickedThum.dataset.id)

      for (let i = 0; i < items.length; i++ ) {
        items[i].classList.remove('is-active')
      }

      toActiveItem.classList.add('is-active')
    })
  }
})