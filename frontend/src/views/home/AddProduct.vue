<template>
  <div>

    <Header />
    <div class="container-md mt-5 bg-light p-5" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-10 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <label><strong>Add product to the online store</strong></label>
            <br>
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Name of the product</label>
              <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="add the product name"
                  v-model='nameProduct'
              />

            </div>
            <div class="form-group green-border-focus mb-3">
              <label for="exampleInputPassword1">description</label>
              <textarea
                  type="text"
                  class="form-control"
                  id="exampleInputDes"
                  placeholder="Describe the product"
                  v-model='description'
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Price €</label>
              <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="product Price €"
                  v-model='price'
              />
            </div>

            <div class="form-group">
              <label>Add an img</label>
              <br>
              <input
                  type="url"
                  class="form-control"
                  id="exampleInputUrl"
                  placeholder="URL image"
                  v-model='url_image'
              />
            </div>
            <button @click="addProducts" type="submit" class="btn btn-primary btn-block">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../../../services/AuthenticationService';
import Header from '@/layouts/Header';

export default {
  name: 'AddProduct',
  components: {Header},
  data() {
    return {
      nameProduct: '',
      description: '',
      price: '',
      url_image: '',
    };
  },

  methods: {
    /*
      Tässä määritellään menetelmä, joka onnistuu tallentamaan uuden tuotteen tietokantaan
     */
    async addProducts() {
      const response = await AuthenticationService.addProduct({
        nameProduct: this.nameProduct,
        description: this.description,
        price: this.price,
        url_image: this.url_image

      });

      console.log("Add product Page " + response.data);
      if (!this.nameProduct === '' && !this.description === '' && !this.price === '' && !this.url_image === '') {
        alert('You succesfuly added the product');
        // Ohja etusivulle
        await this.$router.push('/')
      } else {
        alert('Please fulfill the fields');
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
  background: #2c3e50;
}

.btn:focus {
  background: #2c3e50;
}
</style>