"use strict";
  /**
   * グローバルナビのクローンを生成
   */
  function setCloneNav() {
    const body = document.body;
    const globalNav = document.getElementById('js-global-nav');

    if(!globalNav) return;

    //cloneNode = 要素の複製
    const cloneNav = globalNav.cloneNode(true);
    //クローンした要素にid振る
    cloneNav.id = 'js-clone-nav';
    cloneNav.classList.add('clone-nav');

    body.insertBefore(cloneNav, body.firstChild);
  }

  /**
   * グローバルナビのクローンをページ上部に移動・固定
   */
  function fixedGlobalNav() {
    var scrollY = window.pageYOffset;
    var trigger = document.getElementById('js-trigger');
    var cloneNav = document.getElementById('js-clone-nav');

    if(!cloneNav || !trigger) return;

    var triggerClientRect = trigger.getBoundingClientRect();
    var triggerY = scrollY + triggerClientRect.top;
    if(scrollY > triggerY) {
      cloneNav.classList.add('is-fixed-nav');
    } else {
      cloneNav.classList.remove('is-fixed-nav');
    }
  }
  window.addEventListener('scroll', fixedGlobalNav);
