export class Select {
  
  constructor(containerClass) {
    this.container = document.querySelector(containerClass);
    this.display = document.querySelector(containerClass + '-display');
    this.menu = document.querySelector(containerClass + '-menu');
    this.options = document.querySelectorAll(containerClass + '-option');
  }
  init () {
    this.display.addEventListener('click', () => this.toggle());
    this.options.forEach((option, i) => {
      if (i === 0) {
        this.setValue(option.dataset.value, option.textContent);
      }
      option.addEventListener('click', () => {
        this.setValue(option.dataset.value, option.textContent);
      })
    })
    document.body.addEventListener('click', (e) => {
      if (!this.container.contains(e.target)) {
        this.close();
      }
    })
  }
  open() {
    this.display.classList.add('isOpen');
    this.menu.classList.add('isOpen');
  }
  close() {
    this.display.classList.remove('isOpen');
    this.menu.classList.remove('isOpen');
  }
  toggle() {
    this.display.classList.toggle('isOpen');
    this.menu.classList.toggle('isOpen');
  }
  setValue(value, label) {
    this.display.setAttribute('data-value', value);
    this.display.textContent = label;
    this.value = {value, label};
    this.close();
  }
  getValue() {
    return this.value;
  }
}