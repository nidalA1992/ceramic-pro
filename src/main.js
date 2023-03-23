import {Select} from "./lib/Select";
import {ModalForm} from "./lib/ModalForm";
import {Burger} from "./components/header/index";

import kavaca_icon from "./assets/kavaca_icon.png";
import logo_white from "./assets/logo-white.png";
import favicon from "./assets/favicon.png";

const ar = [kavaca_icon, logo_white, favicon];

const path = location.pathname.match(/\w/gi)?.join('');
const activeNav = document.querySelectorAll(`[data-nav="${path}"]`);
activeNav.forEach(item => item.classList.add('active-nav'));

window.addEventListener('load', () => {
  document.querySelector('.page-loader').remove();
});

export function initApp () {
  new Select(".select-lang").init();
  new ModalForm().init();
  new Burger().init();
}