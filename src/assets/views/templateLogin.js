//  DOM
import { loginUser} from './../js/auth.js';

export const templateLogin = () => {
      const containerLogin = document.createElement('div');// creamos el div para mostar la info que desamos ver
      const contentLogin = ` <div class= "formLogin"> 
         <button id="loguin" class= "createBtn">Ingresar con Google</button>
         <input type="email" placeholder="Ingresa email" id="email">
         <input type="password" placeholder="Ingresa contraseña" id="contrasena">
         <button id="sesion" class = "createBtn">Iniciar sesion</button>
         <section>
    <img  class="image" src="assets/img/perro y gato.png" alt="Imagen de perros y gato">
</section>
         </div>`
      containerLogin.innerHTML = contentLogin;
      const btn = containerLogin.querySelector('#loguin');
         btn.addEventListener('click', () => {
            login();
      })
      const btn2 = containerLogin.querySelector('#sesion');
         btn2.addEventListener('click', () => {
            let email = document. getElementById('email');
            let password = document.getElementById('contrasena');
         /*console.log(session());*/
         loginUser(email,contrasena);
      })
     
      return containerLogin
      login();
      eyes();
      loginUser();

};

