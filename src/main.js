import {Select} from "./lib/Select";
import {ModalForm} from "./lib/ModalForm";
import {Burger} from "./components/header/index";

export function initApp () {
  new Select(".select-lang").init();
  new ModalForm().init();
  new Burger().init();
}