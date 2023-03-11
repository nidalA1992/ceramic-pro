import { Splide } from "@splidejs/splide";

import { Select } from "../../lib/select";

import slide_1 from "../../assets/avto-moto-banner.png";
import slide_2 from "../../assets/avia-banner.png";
import slide_3 from "../../assets/gidro-banner.png";
import slide_4 from "../../assets/clothes-banner.png";
import slide_5 from "../../assets/offices-banner.png";
import slide_6 from "../../assets/homes-banner.png";
import product_1 from "../../assets/product-1.png";
import iso from "../../assets/iso-img.png";
import light_on from "../../assets/light-on.png";
import img_70 from "../../assets/70-img.svg";
import news_1 from "../../assets/news-1.png";
import news_2 from "../../assets/news-2.png";
import vector from "../../assets/Vector.png";
import logo from "../../assets/logo.png";

import "./index.scss";

const imgs = [
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  slide_6,
  product_1,
  iso,
  light_on,
  img_70,
  news_1,
  news_2,
  vector,
  logo,
];
imgs.length = 0;

const options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  pauseOnHover: false,
  pauseOnFocus: true,
  speed: 1500,
  gap: "15px",
  arrows: false,
  pagination: true,
  easing: "ease-in-out",
  drag: "free",
  snap: true,
  // autoplay: true,
  interval: 3500,
  resetProgress: false,
  updateOnMove: true,
  lazyLoad: "nearby",
  arrowPath:
    "M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM42 10.5L0 10.5V13.5L42 13.5V10.5Z",
  breakpoints: {
    960: {
      perPage: 1,
    },
  },
};

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
