export class ModalForm {
  createModal() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.setAttribute('data-close-modal', '');
    
    this.modal.addEventListener("click", (e) => {
      if (e.target.contains(this.modal)) {
        this.closeModalForm();
      } 
    })
  }
  
  createModalForm() {
    this.modalForm = document.createElement("div");
    this.modalForm.classList.add("modal-form");
    
    this.modalForm.innerHTML = `
      <h3 class="modal-form__title">
        Оставьте свои данные и мы преезвоним Вам в ближайшее время
      </h3>
      <input class="modal-form__input" type="text" placeholder="Ваше имя">
      <input class="modal-form__input" type="tel" placeholder="Номер телефона" required>
      <input class="modal-form__input" type="text" placeholder="Город, регион" required>
      <button class="modal-form__submit pink-button">
        Отправить заявку
      </button>
    `;
    
    this.closeButton = document.createElement('button');
    this.closeButton.classList.add('modal-form__close-button');
    this.closeButton.innerHTML = `
      <svg width="60" height="60" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M73.3867 25.5488L25.2097 73.0765" stroke="black"/>
        <path d="M74.4609 74.6841L24.0436 23.8096" stroke="black"/>
      </svg>
    `;
    this.closeButton.addEventListener("click", (e) => {
      this.closeModalForm();
    });
    this.modalForm.append(this.closeButton);
  }
  
  addModalFormToModal () {
    this.modal.append(this.modalForm);
  }
  
  addEventHandlerForOpenModal() {
    const openButtons = document.querySelectorAll('[data-modal-form]');
    
    openButtons.forEach(button => {
      button.addEventListener("click", this.openModalForm.bind(this));  
    });
  }

  openModalForm() {
    document.body.append(this.modal);
  }
  
  closeModalForm() {
    this.modal.remove();
  }
  
  init() {
    this.createModal();
    this.createModalForm();
    this.addModalFormToModal();
    this.addEventHandlerForOpenModal();
  }
}