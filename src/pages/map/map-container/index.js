import {mapStyles} from '../lib/map-styles';
import {MapInfoWindow} from "../../../lib/MapInfoWindow";

export function initMap() {
  let map;

  const svgMarger = {
    path: "M8 16C8 16 14 10.3137 14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 10.3137 8 16 8 16ZM8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6C11 7.65685 9.65685 9 8 9Z",
    fillColor: "#EC1D91",
    strokeColor: "#EC1D91",
    fillOpacity: 1,
    scale: 3,
  }

  const center = { lat: 41.299592, lng: 69.239924 };
  
  map = new google.maps.Map(document.getElementById("map"), {
    center,
    zoom: 13,
    styles: mapStyles
  });

  const marker = new google.maps.Marker({
    position: center,
    title:"Ceramic Pro",
    icon: svgMarger
  });
  
  marker.setMap(map);

  marker.addListener("click", () => {
    const wind = new MapInfoWindow(
      "Ceramic Pro Ташкент", 
      "Уллица Мирзо Улугбек, 1 строение, массив Фируза дом 45",
      "+998701233445",
      "ceramicpro@mail.ru"
    );
    wind.init();
    wind.open();
  })
}


