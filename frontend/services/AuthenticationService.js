// Oikea Porti
import api from './api';

export default {
  register(credentials) {
    return api().post('register', credentials);
  },
  login(credentials) {
    return api().post('login', credentials);
  },
  addProduct(credentials) {
    //Upload tarkoitaa kun luoda uusi tuote tietokantaan
    return api().post('Upload', credentials);
  },
};