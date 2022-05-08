/*
    Vue-reititin (router) auttaa meitä navigoimaan sovelluksemme sivuilla.
    Jokaisella sivulla on tietty polku tai URL-osoite tai reitti, jonka rekisteröimme projektimme reiteille.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Header.vue'),
    /*
      Tämä children vaihtoehto tarkoittaa, että  kun halutaan tilataa tuoten niin ensin pitäisi kirjaudu sisään sitten
      on mahdollista lisätä / poistaa tuoten ostoskoriin ja myös kpl määrä
    */
    children: [
      { path: '', component: () => import('../views/home/Products.vue') },
      { path: 'details/:idProduct', component: () => import('../views/home/ProductDetails.vue') },
      { path: 'cart', component: () => import('../views/home/Cart.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('../views/account/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('../views/account/Register.vue')
  },
  {
    path: '/addProduct',
    name : 'Add Product',
    component: () => import('../views/home/AddProduct.vue')
  },
]

const router = new VueRouter({
  // poistaa sen # URL-osoitteesta eli: http://localhost:8080/#/login  --> http://localhost:8080/login
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
