// DOM
import{acount} from './../js/auth.js';// esta es la ruta
export const templateAcount = () => {
    const containerAcount = document.createElement('div');
    const contenAcount = `
        <h4>Registro de Usuarios</h4>
        <input type="email" placeholder="Ingresa email" id="email">
        <input type="password" placeholder="Ingresa contraseña" id="contrasena">
        <button id="crear">crear cuenta</button>`
    containerAcount.innerHTML = contenAcount;

    const btn = containerAcount.querySelector('#crear');
    btn.addEventListener('click', () => {
        console.log(acount());
    })
    return containerAcount;
}