//  DOM
import {login} from './../js/auth.js';

export const templateLogin = () => {
    const containerLogin = document.createElement('div');// creamos el div para mostar la info que desamos ver
     const contentLogin = //`
    //     <h4>Registro de Usuarios</h4>
    //     <input type="email" placeholder="Ingresa email" id="email">
    //     <input type="password" placeholder="Ingresa contraseña" id="contraseña">
    //     <button id="loguin">Envíar</button>
    // `
    containerLogin.innerHTML = contentLogin;
    
    const btn = containerLogin.querySelector('#loguin');
    btn.addEventListener('click', () => {
       console.log(login);
    })
    return containerLogin;
}