//Axios on NPM-paketti HTTP-pyyntöjen tekemiseen meidä node path kautta.
import axios from 'axios';

// Hake kaikki tuotteet tietokannasta tai fake API:sta
export function getProducts({commit}) {
  //  Testin varten käytetiin tästä linkistä http://localhost:3000/product hakee tuotteita FAKE API:sta, jossa se sijaitsee, palvelimellemme eli backend kansiossa
  //  nimellä backend/API/fakeAPi-json.json
  //  ajaa ohjelmaa: json-server --watch fakeAPi-json.json



  // Tästä linkista: http://localhost:8000/product hakee tiedot serverilta jotka tiedot löytyy myös tietokanta
  let url = 'http://localhost:8000/product';
  axios.get(url).then((response) => {
    commit('setProducts', response.data);
  }).catch(error => {
    console.log(error);
  });
}

//hakee tuotetietoja palvelimelta/tietokannasta ja esittele se verkossa
export function productDetails({commit}, id) {
  let url = 'http://localhost:8000/product/';
  axios.get(url, {params: {id: id}}).then((response) => {
    commit('setProduct', response.data[0]);
  }).catch(function(error) {
    console.log(error);
  });
}

//Laita valitsemasi tuotteet ostokoriin
export function addCart({commit, getters}, payload) {
  let cart = getters.cart;
  let data = payload.product;
  data['quantity'] = payload.quantity;
  cart.push(data);
  commit('setCart', cart);
}

// Poista valitsemasi tuotteet ostoskorista
export function removeCart({commit, getters}, id) {
  let cart = [];
  if (id) {
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.id !== id) {
        cart.push(element);
      }
    }
  }
  commit('setCart', cart);
}
