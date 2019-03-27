import {loguin} from './../js/auth.js';

export const templateLogin = () => {
    const containerLogin = document.createElement('div');
    const contentLogin = `<p>Login con Google</p>
                            <button id="login">Logueado</button>`
    containerLogin.innerHTML = contentLogin;

    const btn = containerLogin.querySelector('#login');
    btn.addEventListener('click', () => {
        console.log(loguin());
    })
    return containerLogin;
}