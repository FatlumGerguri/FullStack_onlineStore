<template>
  <div>
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
            <button @click="register" type="submit" class="btn btn-primary btn-block">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../../../services/AuthenticationService';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    /*
    Kun uusi käyttäjä rekisteröidy ja nämä tiedot tallennetaan tietokantaan
     */
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
      if (!this.email.length <= 0 && !this.password.length <= 0) {
        alert('You are successfully registered');
        // Ohja etusivulle
        await this.$router.push('/');
      } else {
        alert('Please enter your email and password');
      }
    },
  },
};
</script>

<style scoped>
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