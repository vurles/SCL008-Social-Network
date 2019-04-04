// creamos dos funciones para el login  con goglee y la creacion de la cuenta
// solo autentificacion

  // Initialize Firebase

  

  export const login = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
        let token = result.credential.accessToken;
      // La información del usuario que ha iniciado sesión.
        let user = result.user;
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


export const acount = () => {
    let mail = document.getElementById('email').value;
    let password = document.getElementById('contrasena').value;
    console.log(mail);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(function(){
      verificar()
    })
    .catch(function(error) {
    // Handle Errors here.
        let errorCode =alert (error.code);
        let errorMessage = alert(error.message);
    // ...
  });
// 
}
export const eyes = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}
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

export const session = () => {
    let emmail = document.getElementById('email').value;
    let pass = document.getElementById('contrasena').value;
    console.log(emmail);
    console.log(pass);
  firebase.auth().signInWithEmailAndPassword(emmail, pass)
    .catch(function(error) {
      // Handle Errors here.
          let errorCode =alert (error.code);
          let errorMessage = alert(error.message);
      // ...
    });
  // 
  }
