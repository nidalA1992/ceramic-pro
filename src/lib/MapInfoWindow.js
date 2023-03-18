export class MapInfoWindow {
  constructor(title, address, number, email) {
    this.title = title;
    this.addres = address;
    this.number = number;
    this.email = email;
  }
  
  createWindow() {
    this.closeButton = document.createElement('button');
    this.infoWindow = document.createElement("div");
    
    this.closeButton.classList.add("map-info__close-button");
    this.infoWindow.classList.add("map-info");

    this.infoWindow.innerHTML = `
      <p class="map-info__row">${this.title}</p>
      <p class="map-info__row">${this.addres}</p>
      <p class="map-info__row">Номер: <a href="tel:${this.number}">${this.number}</a></p>
      <p class="map-info__row">Email: <a href="mailto:${this.email}">${this.email}</a></p>
    `;
    
    this.closeButton.innerHTML = `
      <svg width="35" height="35" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M73.3867 25.5488L25.2097 73.0765" stroke="#ec1991"/>
        <path d="M74.4609 74.6841L24.0436 23.8096" stroke="#ec1991"/>
      </svg>
    `;
    
    this.infoWindow.append(this.closeButton);
    this.closeButton.addEventListener("click", this.close.bind(this));
  }
  
  close() {
    this.infoWindow.remove();
  }
  
  open() {
    if(document.querySelector('.map-info')) {
      document.querySelector('.map-info').remove();
    }
    
    document.body.append(this.infoWindow);
  }
  
  init() {
    this.createWindow();
  }
}