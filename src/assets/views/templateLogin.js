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
         <button id="loguin" class= "createBtn" onclick="window.location.href='#/muro'">Ingresar con Google</button>
         <input type="email" placeholder="Ingresa email" id="mail">
         <input type="password" placeholder="Ingresa contraseña" id="contrasena">
         <button id="sesion" class ="createBtn" onclick="window.location.href='#/muro'">Iniciar sesion</button>
         <section>
    <img  class="image" src="assets/img/perro y gato.png" alt="Imagen de perros y gato">
</section>
         </div>`
      containerLogin.innerHTML = contentLogin;
      const btn = containerLogin.querySelector('#loguin');
         btn.addEventListener('click', () => {
            login();
            console.log (login());
      })
      const btn2 = containerLogin.querySelector('#sesion');
         btn2.addEventListener('click', () => {
            let email = document.getElementById('mail').value;
            console.log(email);
            let password = document.getElementById('contrasena').value;
         /*console.log(session());*/
         loginUser(email,password);
         console.log(loginUser());
      })
     
      return containerLogin
      login();
      eyes();
      loginUser();

};

