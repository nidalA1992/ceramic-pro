import { Splide } from "@splidejs/splide";
import {initApp} from "../../main";
import {options} from "../../lib/options-splide";

import "./index.scss";

new Splide(".products-slider", {
  ...options,
  gap: 0,
  pagination: false,
  arrows: true,
  perPage: 3,
  width: "100%",
  fixedWidth: "33%",
  breakpoints: {
    900: {
      perPage: 2,
      fixedWidth: "50%",
    },
    600: {
      perPage: 1,
      width: "100%",
      fixedWidth: "100%",
    },
  },
}).mount();

initApp();