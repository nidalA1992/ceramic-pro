import {Select} from "./lib/Select";
import {ModalForm} from "./lib/ModalForm";
import {Burger} from "./components/header/index";

import kavaca_icon from "./assets/kavaca_icon.png";
import logo_white from "./assets/logo-white.png";
import favicon from "./assets/favicon.png";

const ar = [kavaca_icon, logo_white, favicon];

export function initApp () {
  new Select(".select-lang").init();
  new ModalForm().init();
  new Burger().init();
}