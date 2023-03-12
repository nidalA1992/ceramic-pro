import { Splide } from "@splidejs/splide";
import { Select } from "../../lib/select";

import {options} from '../../lib/options-splide';

import slide_1 from "../../assets/avto-moto-banner.png";
import slide_2 from "../../assets/avia-banner.png";
import slide_3 from "../../assets/gidro-banner.png";
import slide_4 from "../../assets/clothes-banner.png";
import slide_5 from "../../assets/offices-banner.png";
import slide_6 from "../../assets/homes-banner.png";
import ion_base_coat from "../../assets/ion-base-coat.png";
import ceramic_pro_9h from "../../assets/ceramic-pro-9h.png";
import ion_top_coat from "../../assets/ion-top-coat.png";
import iso from "../../assets/iso-img.png";
import light_on from "../../assets/light-on.png";
import img_70 from "../../assets/70-img.svg";
import news_1 from "../../assets/news-1.png";
import news_2 from "../../assets/news-2.png";
import vector from "../../assets/Vector.png";
import logo from "../../assets/logo.png";

import "./index.scss";

let imgs = [
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  slide_6,
  ion_base_coat,
  ceramic_pro_9h,
  ion_top_coat,
  iso,
  light_on,
  img_70,
  news_1,
  news_2,
  vector,
  logo,
];
imgs = null;

const options2 = {
  ...options,
  gap: 0,
  pagination: false,
  arrows: true,
};

new Splide(".hero", options).mount();
new Splide(".directions", options2).mount();
new Splide(".products-slider", {
  ...options2,
  perPage: 3,
  width: "80%",
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

new Splide(".benefits-slider", options).mount();

new Select(".select-lang").init();
