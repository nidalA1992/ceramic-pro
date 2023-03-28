import {Select} from "./lib/Select";
import {ModalForm} from "./lib/ModalForm";
import {Burger} from "./components/header/index";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import kavaca_icon from "./assets/kavaca_icon.png";
import logo_white from "./assets/logo-white.png";
import favicon from "./assets/favicon.png";
import automotive from "./assets/automitive.jpg";
import brooklyn from "./assets/brooklyn.png";
import blesk_pro from "./assets/blesk-pro.png";
import star_shine from "./assets/star-shine.png";
import {Splide} from "@splidejs/splide";
import {options} from "./lib/options-splide";

const ar = [kavaca_icon, logo_white, favicon, automotive, brooklyn, blesk_pro, star_shine];
ar.length = 0;

const path = location.pathname.match(/\w/gi)?.join('');
const activeNav = document.querySelectorAll(`[data-nav="${path}"]`);
activeNav.forEach(item => item.classList.add('active-nav'));

window.addEventListener('load', () => {
  document.querySelector('.page-loader').remove();
});

export function initApp () {
  const options_custom = {
    type: "loop",
    perPage: 6,
    arrows: false,
    pagination: false,
    gap: "50px",
    width: "100%",
    breakpoints: {
      900: {
        perPage: 4,
        gap: "30px",
      },
      456: {
        perPage: 2,
        gap: "30px"
      }
    },
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 1,
      rewind: false
    }
  }
  
  new Select(".select-lang").init();
  new ModalForm().init();
  new Burger().init();
  new Splide(".partners__splide", options_custom).mount({ AutoScroll });
}