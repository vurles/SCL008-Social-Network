// DOM
import { acount } from './../js/auth.js';// esta es la ruta


export const templateAcount = () => {
const containerAcount = document.createElement('div');//se crea clase para estilos
const contenAcount = `<div class ="userForm">
    <h4>Registro de Usuarios</h4>
    <input type="text" placeholder="Nombre mascota" id="namePet"/><br>
    <input type="text" placeholder="Perro o Gato" id="typePet"/><br>
    <input type="text" placeholder="Ingresa email" id="email"/><br>
    <input type="password" placeholder="Ingresa contraseña" id="contrasena"/><br>
    <button id="crear" class ="createBtn">crear cuenta</button>
    </div>` 
containerAcount.innerHTML = contenAcount;

const btn = containerAcount.querySelector('#crear');
    btn.addEventListener('click', () => {
let mail = document.getElementById('email').value;
let password = document.getElementById('contrasena').value;
let namePets = document.getElementById('namePet').value;
let razaPets = document.getElementById('typePet').value;
    console.log(mail);
    console.log(password);
    console.log(namePets);
    console.log(razaPets);
acount(mail, password, namePets, razaPets);
    })
return containerAcount;
};
