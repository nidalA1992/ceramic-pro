import { Select } from "../../lib/select";
import { Splide } from "@splidejs/splide";

import {options} from "../../lib/options-splide";

import "./index.scss";

new Select(".select-lang").init();

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
