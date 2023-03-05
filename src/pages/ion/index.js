import { Select } from '../../lib/select';

import hero_img from '../../assets/ion-hero.png';
import hero_img_back from '../../assets/ion-hero-back.jpg';

const img = [hero_img, hero_img_back];
img.length = 0;

import './index.scss';

new Select('.select-lang').init();
