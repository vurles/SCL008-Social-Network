//  DOM
import {login, eyes, session} from './../js/auth.js';

export const templateLogin = () => {
      const containerLogin = document.createElement('div');// creamos el div para mostar la info que desamos ver
      const contentLogin = ` <div class= "formLogin"> 
         <button id="loguin">Ingresar con Google</button>
         <input type="email" placeholder="Ingresa email" id="email">
         <input type="password" placeholder="Ingresa contraseña" id="contrasena">
         <button id="sesion">Iniciar sesion</button>
         </div>`
      containerLogin.innerHTML = contentLogin;
      const btn = containerLogin.querySelector('#loguin');
         btn.addEventListener('click', () => {
            login();
      })
      const btn2 = containerLogin.querySelector('#sesion');
         btn2.addEventListener('click', () => {
         console.log(session());
      })
      return containerLogin
      login();
      eyes();
      session();

};

