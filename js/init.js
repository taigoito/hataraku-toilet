/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

const data = {
  data() {
    return {
      product: [],
      products: [
        {
            "no": "1",
            "category": "0",
            "manufacturer": "TOTO",
            "model": "CS370",
            "image": "01WC.png",
            "price": "100000",
            "salePrice": "70000",
            "feature1": "ハイパーキラミック",
            "feature2": "暖房便座",
            "feature3": "フチレス",
            "recommend": "値段重視",
            "spec11": "普通便座",
            "spec12": "-",
            "spec13": "-",
            "spec21": "大8.0L",
            "spec22": "小6.0L",
            "spec23": "-",
            "spec31": "セフィオンテクト",
            "spec32": "-",
            "spec33": "-",
            "spec41": "-",
            "spec42": "-",
            "spec43": "-",
            "spec51": "-",
            "spec52": "-",
            "spec53": "-",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        },
        {
            "no": "2",
            "category": "0",
            "manufacturer": "TOTO",
            "model": "CS371",
            "image": "01WC.png",
            "price": "120000",
            "salePrice": "90000",
            "feature1": "CS371|aaa",
            "feature2": "CS371|bbb",
            "feature3": "CS371|ccc",
            "recommend": "値段重視",
            "spec11": "CS371|スペックAAA",
            "spec12": "CS371|スペックBBB",
            "spec13": "CS371|スペックCCC",
            "spec21": "CS371|スペックDDD",
            "spec22": "CS371|スペックEEE",
            "spec23": "-",
            "spec31": "CS371|スペックGGG",
            "spec32": "-",
            "spec33": "-",
            "spec41": "-",
            "spec42": "-",
            "spec43": "-",
            "spec51": "-",
            "spec52": "-",
            "spec53": "-",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        },
        {
            "no": "3",
            "category": "0",
            "manufacturer": "LIXIL",
            "model": "CS372",
            "image": "01WC.png",
            "price": "150000",
            "salePrice": "120000",
            "feature1": "CS372|aaa",
            "feature2": "CS372|bbb",
            "feature3": "CS372|ccc",
            "recommend": "性能重視",
            "spec11": "CS372|スペックAAA",
            "spec12": "CS372|スペックBBB",
            "spec13": "CS372|スペックCCC",
            "spec21": "CS372|スペックDDD",
            "spec22": "CS372|スペックEEE",
            "spec23": "-",
            "spec31": "CS372|スペックGGG",
            "spec32": "CS372|スペックHHH",
            "spec33": "-",
            "spec41": "CS372|スペックJJJ",
            "spec42": "CS372|スペックKKK",
            "spec43": "-",
            "spec51": "CS372|スペックMMM",
            "spec52": "-",
            "spec53": "-",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        },
        {
            "no": "4",
            "category": "0",
            "manufacturer": "LIXIL",
            "model": "CS373",
            "image": "01WC.png",
            "price": "180000",
            "salePrice": "135000",
            "feature1": "CS373|aaa",
            "feature2": "CS373|bbb",
            "feature3": "CS373|ccc",
            "recommend": "性能重視",
            "spec11": "CS373|スペックAAA",
            "spec12": "CS373|スペックBBB",
            "spec13": "CS373|スペックCCC",
            "spec21": "CS373|スペックDDD",
            "spec22": "CS373|スペックEEE",
            "spec23": "CS373|スペックFFF",
            "spec31": "CS373|スペックGGG",
            "spec32": "CS373|スペックHHH",
            "spec33": "CS373|スペックIII",
            "spec41": "CS373|スペックJJJ",
            "spec42": "CS373|スペックKKK",
            "spec43": "CS373|スペックLLL",
            "spec51": "CS373|スペックMMM",
            "spec52": "CS373|スペックNNN",
            "spec53": "CS373|スペックOOO",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        },
        {
            "no": "5",
            "category": "1",
            "manufacturer": "TOTO",
            "model": "WS374",
            "image": "01WC.png",
            "price": "100000",
            "salePrice": "70000",
            "feature1": "WS374|aaa",
            "feature2": "WS374|bbb",
            "feature3": "WS374|ccc",
            "recommend": "値段重視",
            "spec11": "WS374|スペックAAA",
            "spec12": "WS374|スペックBBB",
            "spec13": "WS374|スペックCCC",
            "spec21": "WS374|スペックDDD",
            "spec22": "WS374|スペックEEE",
            "spec23": "WS374|スペックFFF",
            "spec31": "WS374|スペックGGG",
            "spec32": "WS374|スペックHHH",
            "spec33": "WS374|スペックIII",
            "spec41": "WS374|スペックJJJ",
            "spec42": "WS374|スペックKKK",
            "spec43": "WS374|スペックLLL",
            "spec51": "WS374|スペックMMM",
            "spec52": "WS374|スペックNNN",
            "spec53": "WS374|スペックOOO",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        },
        {
            "no": "6",
            "category": "1",
            "manufacturer": "TOTO",
            "model": "WS375",
            "image": "01WC.png",
            "price": "120000",
            "salePrice": "90000",
            "feature1": "WS375|aaa",
            "feature2": "WS375|bbb",
            "feature3": "WS375|ccc",
            "recommend": "値段重視",
            "spec11": "WS375|スペックAAA",
            "spec12": "WS375|スペックBBB",
            "spec13": "WS375|スペックCCC",
            "spec21": "WS375|スペックDDD",
            "spec22": "WS375|スペックEEE",
            "spec23": "WS375|スペックFFF",
            "spec31": "WS375|スペックGGG",
            "spec32": "WS375|スペックHHH",
            "spec33": "WS375|スペックIII",
            "spec41": "WS375|スペックJJJ",
            "spec42": "WS375|スペックKKK",
            "spec43": "WS375|スペックLLL",
            "spec51": "WS375|スペックMMM",
            "spec52": "WS375|スペックNNN",
            "spec53": "WS375|スペックOOO",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        },
        {
            "no": "7",
            "category": "1",
            "manufacturer": "LIXIL",
            "model": "WS376",
            "image": "01WC.png",
            "price": "150000",
            "salePrice": "120000",
            "feature1": "WS376|aaa",
            "feature2": "WS376|bbb",
            "feature3": "WS376|ccc",
            "recommend": "性能重視",
            "spec11": "WS376|スペックAAA",
            "spec12": "WS376|スペックBBB",
            "spec13": "WS376|スペックCCC",
            "spec21": "WS376|スペックDDD",
            "spec22": "WS376|スペックEEE",
            "spec23": "WS376|スペックFFF",
            "spec31": "WS376|スペックGGG",
            "spec32": "WS376|スペックHHH",
            "spec33": "WS376|スペックIII",
            "spec41": "WS376|スペックJJJ",
            "spec42": "WS376|スペックKKK",
            "spec43": "WS376|スペックLLL",
            "spec51": "WS376|スペックMMM",
            "spec52": "WS376|スペックNNN",
            "spec53": "WS376|スペックOOO",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        },
        {
            "no": "8",
            "category": "1",
            "manufacturer": "LIXIL",
            "model": "WS377",
            "image": "01WC.png",
            "price": "180000",
            "salePrice": "135000",
            "feature1": "WS377|aaa",
            "feature2": "WS377|bbb",
            "feature3": "WS377|ccc",
            "recommend": "性能重視",
            "spec11": "WS377|スペックAAA",
            "spec12": "WS377|スペックBBB",
            "spec13": "WS377|スペックCCC",
            "spec21": "WS377|スペックDDD",
            "spec22": "WS377|スペックEEE",
            "spec23": "WS377|スペックFFF",
            "spec31": "WS377|スペックGGG",
            "spec32": "WS377|スペックHHH",
            "spec33": "WS377|スペックIII",
            "spec41": "WS377|スペックJJJ",
            "spec42": "WS377|スペックKKK",
            "spec43": "WS377|スペックLLL",
            "spec51": "WS377|スペックMMM",
            "spec52": "WS377|スペックNNN",
            "spec53": "WS377|スペックOOO",
            "slide1": "",
            "slide2": "",
            "slide3": ""
        }
      ]
    }
  },

  mounted() {
    // 金額表記等データ成形
    this.products.forEach((product, i) => {
      product.title = `${product.manufacturer} | ${product.model}`;
      if (product.price - 0 && !isNaN(product.price) && 
        product.salePrice - 0 && !isNaN(product.salePrice)) {
        product.discount = Math.round((1 - product.salePrice / product.price) * 100);
      } else {
        product.discount = '?';
      }
      product.totalPrice = (product.salePrice - 0);
      const str = (product.totalPrice + '')
      product.totalPrice1 = str.slice(0, -4);
      product.totalPrice2 = `.${str.substring(str.length - 4, str.length - 3)}`;
      product.price = (product.price - 0).toLocaleString();
      product.totalPrice = (product.totalPrice - 0).toLocaleString();
      product.salePrice = (product.salePrice - 0).toLocaleString();
    });

    // カテゴリー分け
    if (document.body.id == 'lpTop') {
      this.products.cat1 = []
      this.products.cat2 = [];
      this.products.forEach((product) => {
        if (product.category != 1) this.products.cat1.push(product);
        else this.products.cat2.push(product);
      });
    }

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
