import router from '../../router';
import Axios from 'axios';

export function login({commit}) {
// Käytettiin kun luodaan uusi käyttäjille joku Fake API, jota se hakee tästä linkistä
  let url = 'https://randomuser.me/api/';

  Axios.get(url).then(function(response) {
    let userData = {
      photoURL: response.data.results[0].picture.thumbnail,
      uid: response.data.results[0].login.uuid,
    };

    commit('setUserData', userData);
    router.push('/');
  }).catch(function(error) {
    console.log(error);
  });

}
