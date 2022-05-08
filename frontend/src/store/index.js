/*
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Kun Vuex on jo asennettu, meidän on luotava kansio nimeltä store projektimme root path.                            //
  // store kanssio on määriteltty kaksi kansiota, jotka ovat:                                                           //
  //      account - käyttäjän tiedot.                                                                                   //
  //      product - tuotetiedot.                                                                                        //
  //                                                                                                                    //
  // Nämä funktiot ovat määriteltty omassa kansiossa kuten account sekä product, johon löytetty nämä tiedostot:         //
  //  action.js                                                                                                         //
  //  getters.js                                                                                                        //
  //  index.js                                                                                                          //
  //  mutation.js                                                                                                       //
  //  state.js                                                                                                          //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

import Vue from 'vue';
import Vuex from 'vuex';

//Importoida molemat kansiot
import account from './account';
import product from './product';


Vue.use(Vuex);
// Tässä on kaksi kansiota, eli account ja product store kansiossa Store:lla
export default function() {
  const Store = new Vuex.Store({
    modules: {
      account,
      product,
    },
  });

  //Palauttaa koko Store jossa löytyy molemmat kansiot
  return Store;
}
