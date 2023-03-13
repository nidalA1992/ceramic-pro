export class Burger {
  constructor() {
    this.menu = document.getElementById("burger-menu");
    this.button = document.getElementById("burger-button");
    this.closeButton = document.getElementById("close-burger-button");
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  
  open() {
    this.menu.classList.add("menu-is-open");
  }
  
  close() {
    this.menu.classList.remove("menu-is-open");
  }
  
  init() {
    this.button.addEventListener("click", this.open);
    this.closeButton.addEventListener("click", this.close);
  }
}