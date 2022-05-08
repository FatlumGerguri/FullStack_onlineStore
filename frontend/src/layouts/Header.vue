<!-- Tällä luodaan sivu, jossa näkyy NavBar tai Header koko www-sivulle -->
<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="navbar-brand" to="/">Verkkokauppa Vuejs</router-link>
        <div class="ml-auto">
          <div v-if="user.photoURL">
            <img
              :src="user.photoURL"
              class="img-thumbnail profile-image"
              alt
            />
            <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
            </router-link>
          </div>
          <router-link  v-else class="btn btn-primary my-2 my-sm-0" to="/login">Login</router-link>
          <router-link   class="btn btn-primary my-2 my-sm-0" to="/register">Register</router-link>
          <router-link   class="btn btn-primary my-2 my-sm-0" to="/addProduct">Add new Product</router-link>

        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["cart"])
  }
};
</script>

<style>
nav {
  background-color: #2c3e50;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  color: #ffffff !important;
}
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 81px;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: #2c3e50;
  border: #2c3e50;
}
.btn:hover {
  background: #2c3e50;
}
input {
  border-radius: 0%;
}
.btn:focus {
  background: #2c3e50;
}
</style>