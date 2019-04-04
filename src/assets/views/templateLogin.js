//  DOM
import {login, eyes} from './../js/auth.js';

export const templateLogin = () => {
    const containerLogin = document.createElement('div');// creamos el div para mostar la info que desamos ver
    const contentLogin = `  
      
      <button id="loguin">Ingresar con Google</button>
     `
    containerLogin.innerHTML = contentLogin;
    
    const btn = containerLogin.querySelector('#loguin');
    btn.addEventListener('click', () => {
       login();
    })
    return containerLogin
     login();
     eyes();

}
//