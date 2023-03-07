import { Select } from '../../lib/select';

import hero_img from '../../assets/ion-hero.png';
import hero_img_back from '../../assets/ion-hero-back.jpg';
import ion_base_coat from '../../assets/ion-base-coat.png'
import ion_top_coat from '../../assets/ion-top-coat.png'
import ceramic_pro_ion_schema from '../../assets/ceramic-pro-ion-schema.png';
import ceramic_pro_9h_schema from '../../assets/ceramic-pro-9h-schema.png';
import polygon from '../../assets/polygon.png';
import logo_ion from '../../assets/black-logo.png';
import ion_banner from '../../assets/ion-banner.png';
import ion_footer_banner from '../../assets/ion-footer-banner.png'


const img = [hero_img, hero_img_back, ion_base_coat, ion_top_coat, ceramic_pro_ion_schema, ceramic_pro_9h_schema, polygon, logo_ion, ion_banner, ion_footer_banner];
img.length = 0;

import './index.scss';

new Select('.select-lang').init();
