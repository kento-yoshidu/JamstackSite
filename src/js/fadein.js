const scrollAnimationElm = document.querySelectorAll('.sa');
const scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    const triggerMargin = 0;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);