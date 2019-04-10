//  DOM
import {login, loginUser} from './../js/auth.js';

export const templateLogin = () => {
      const containerLogin = document.createElement('div');// creamos el div para mostar la info que desamos ver
      const contentLogin = ` <div class= "formLogin"> 
      <header>
            <div class="logo">
            <a href="index.html"> 
            <img src="assets/img/tinpet.png" style="width: 150px;" alt="Logo"></a>
        </div>
    </header>
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

