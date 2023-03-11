import { Select } from "../../lib/select";

import avto_moto from '../../assets/avto-moto.png';
import avia from '../../assets/avia.png';
import gidro from '../../assets/gidro.png';
import clothes from '../../assets/clothes.png';
import offices from '../../assets/offices.png';
import homes from '../../assets/homes.png';

import "./index.scss";

const imgs = [
  avto_moto, 
  avia,  
  gidro,
  clothes,
  offices,
  homes
];
imgs.length = 0;

new Select(".select-lang").init();
