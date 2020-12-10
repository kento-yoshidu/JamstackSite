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

const scrollAnimationElm = document.querySelectorAll('.sa');
const scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    const triggerMargin = 50;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

const links = document.getElementsByClassName('drawer-link')
const check = document.getElementById('checked')

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {

    check.checked = false;
  })
}
