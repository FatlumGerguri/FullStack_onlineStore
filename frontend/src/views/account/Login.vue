<template>
  <div>
    <Header />
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
          </div>
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
                v-model='email'
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  v-model='password'
              />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button @click="login" type="submit" class="btn btn-primary btn-block">Login (FakeUser API)</button>
            <button @click="Login" type="submit" class="btn btn-primary btn-block">Check if you are registered in the database</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";
import AuthenticationService from '../../../services/AuthenticationService';
import Header from '@/layouts/Header';


export default {
  name: "Login",
  components: {Header},
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    /* Hake tiedot User FAKE API:sta eli random user tiedot
     */
    ...mapActions("account", ["login"]),

    /* Hakee käyttäjän tideot jotka löytyy tietokannasta
     */
    async Login() {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
      if(!this.email.length <= 0 && !this.password.length <= 0){
        alert('You are successfully logged in');
      }else {
        alert('Please enter your email and password');
      }

    },

  },
};
</script>

<style>
.form-control {
  border-radius: 0%;
  height: 50px;
}
.login-form-container {
  padding: 20px;
  box-shadow: 0px 2px 5px 2px #888888;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: #2c3e50;
  border: #2c3e50;
}
.btn:hover {
  background: #00b4b4;
}
.btn:focus {
  background: #2c3e50;
}
</style>