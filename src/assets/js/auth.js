// creamos dos funciones para el login  con goglee y la creacion de la cuenta
// solo autentificacion

  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyD36cB7TFje_JTuaP53m_Q4sJJirK-hLRg",
    authDomain: "tinder-para-mascotas.firebaseapp.com",
    databaseURL: "https://tinder-para-mascotas.firebaseio.com",
    projectId: "tinder-para-mascotas",
    storageBucket: "tinder-para-mascotas.appspot.com",
    messagingSenderId: "236093972910"
  };
  firebase.initializeApp(config);



export const login = () => {
 
}
export const acount = () => {
    let mail = document.getElementById('email').value;
    let password = document.getElementById('contrasena').value;
    console.log(mail);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .catch(function(error) {
    // Handle Errors here.
        var errorCode =alert (error.code);
        var errorMessage = alert(error.message);
    // ...
  });

}
