// creamos dos funciones para el login  con goglee y la creacion de la cuenta
// solo autentific
import { templatePostWall } from "../views/templatePostWall.js";


  export const login = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
        let token = result.credential.accessToken;
      // La información del usuario que ha iniciado sesión.
        let user = result.user;
        templatePostWall(user)
        console.log(user);
        //mensajes de errores
      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        // error por credenciales malas
        const credential = error.credential;
        
      });
   
};
//esta es la funcion para que el usuario cree una cuenta 
export const acount = (mail, password) => {
    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(function(){
      verificar();
      eyes();
      // funcion guardarUsuarioenDatabase();
    })
    .catch(function(error) {
    // Handle Errors here.
        let errorCode =alert (error.code);
        let errorMessage = alert(error.message);
    // ...
  });
// 
  
// observador de datos del usuario
}
export const eyes = () => {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log('usuario existente');
          soloUsuariosActivos(user);
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        console.log('***********');
        console.log(emailVerified);
        console.log('***********');
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
          console.log('No existe usuari activo');
        // User is signed out.
        // ...
      }
    });
}
// funcion que se llama en forma de promesa .then en la funcion acount
const verificar = () => {
  let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
// Email sent.
console.log('Enviando verificación al correo')
}).catch(function(error) {
// An error happened.
alert('Usuario ya registrado');
});
}
 


//esta funcion es para loguaese con una cuenta ya creada
export const loginUser = (email, contrasena) => {
  firebase.auth().signInWithEmailAndPassword(email, contrasena)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  
}
// export const userCheck = () => {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });
// }

//esta es para cerrar sesión.
  export const singOut = () => {
    firebase.auth().signOut()
    .then(function() {
        alert('cierre de sesión exitoso')
        console.log('saliendo......')
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
}
