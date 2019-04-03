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
  
// Confirm the link is a sign-in with email link.
// if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//   // Additional state parameters can also be passed via URL.
//   // This can be used to continue the user's intended action before triggering
//   // the sign-in operation.
//   // Get the email if available. This should be available if the user completes
//   // the flow on the same device where they started it.
//   var email = window.localStorage.getItem(mail);
//   if (!email) {
//     // User opened the link on a different device. To prevent session fixation
//     // attacks, ask the user to provide the associated email again. For example:
//     email = window.prompt('Please provide your email for confirmation');
//   }
//   // The client SDK will parse the code from the link for you.
//   firebase.auth().signInWithEmailLink(email, window.location.href)
//     .then(function(result) {
//       // Clear email from storage.
//       window.localStorage.removeItem('emailForSignIn');
//       // You can access the new user via result.user
//       // Additional user info profile not available via:
//       // result.additionalUserInfo.profile == null
//       // You can check if the user is new or existing:
//       // result.additionalUserInfo.isNewUser
//     })
//     .catch(function(error) {
//       // Some error occurred, you can inspect the code: error.code
//       // Common errors could be invalid email and invalid or expired OTPs.
//     });
// }
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
