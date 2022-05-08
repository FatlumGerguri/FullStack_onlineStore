import axios from 'axios';

// Tästä saamme dataa palvelimejärjestelmästä
export default () => {
  return axios.create({
    //Main URL palvelimelta
    baseURL: `http://localhost:8000/`,
  });
}