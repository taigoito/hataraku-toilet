/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

const data = {
  data() {
    return {
      products: [
        {
          brand: 'LIXIL',
          name: '商品名が入ります',
          image: './assets/products/01WC.png',
          feature: [
            'ハイパーキラミック',
            '暖房便座',
            'フチレス'
          ],
          offPrice: '30%OFF',
          defaultPrice: '99,000円',
          priceNum1: '9',
          priceNum2: '9'
        },
        {
          brand: 'LIXIL',
          name: '商品名が入ります',
          image: './assets/products/01WC.png',
          feature: [
            'ハイパーキラミック',
            '暖房便座',
            'フチレス'
          ],
          offPrice: '30%OFF',
          defaultPrice: '99,000円',
          priceNum1: '9',
          priceNum2: '9'
        },
        {
          brand: 'LIXIL',
          name: '商品名が入ります',
          image: './assets/products/01WC.png',
          feature: [
            'ハイパーキラミック',
            '暖房便座',
            'フチレス'
          ],
          offPrice: '30%OFF',
          defaultPrice: '99,000円',
          priceNum1: '9',
          priceNum2: '9'
        },
        {
          brand: 'LIXIL',
          name: '商品名が入ります',
          image: './assets/products/01WC.png',
          feature: [
            'ハイパーキラミック',
            '暖房便座',
            'フチレス'
          ],
          offPrice: '30%OFF',
          defaultPrice: '99,000円',
          priceNum1: '9',
          priceNum2: '9'
        }
      ]
    }
  },

  created() {
    // トップ/サブで出力切り替え
    if (document.body.id != 'lpTop') {
      const id = location.hash.slice(1);
      if (id && !isNaN(id) && id <= this.products.length) {
        this.product = this.products[id - 1];
      } else {
        location.hash = 1;
      }
    }
  }
}

if (document.body.id == 'lpTop') {
  Vue.createApp(data).mount('#products');
} else {
  Vue.createApp(data).mount('#product');
}

// Drawer Menu
//import DrawerMenu from './drawerMenu.js';
new DrawerMenu();

// Evil Icons
//import EvilIcons from './evilIcons.js';
new EvilIcons();

// Slider
//import Slider from './slider.js';
new Slider();
