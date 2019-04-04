// inicializacion de las rutas firebase
var config = {
  apiKey: "AIzaSyD36cB7TFje_JTuaP53m_Q4sJJirK-hLRg",
  authDomain: "tinder-para-mascotas.firebaseapp.com",
  databaseURL: "https://tinder-para-mascotas.firebaseio.com",
  projectId: "tinder-para-mascotas",
  storageBucket: "tinder-para-mascotas.appspot.com",
  messagingSenderId: "236093972910"
};
firebase.initializeApp(config);

import {initRout} from './route.js';

const init = () => {
  initRout();
}
window.addEventListener('load', init);