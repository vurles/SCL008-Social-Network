// DOM
import { acount } from './../js/auth.js';// esta es la ruta


export const templateAcount = () => {
const containerAcount = document.createElement('div');//se crea clase para estilos
const contenAcount = `<div class ="userForm">
<header>
            <div class="logo">
            <a href="index.html"> 
            <img src="assets/img/tinpet.png" style="width: 150px;" alt="Logo"></a>
        </div>
    </header>
    <h4>Registro de Usuarios</h4>
    <input type="text" placeholder="Nombre mascota" id="namePet"/>
    <input type="text" placeholder="Perro o Gato" id="typePet"/>
    <input type="text" placeholder="Ingresa email" id="email"/>
    <input type="password" placeholder="Ingresa contraseña" id="contrasena"/>
    <button id="crear" class ="createBtn" onclick="window.location.href='#/muro'">crear cuenta</button>
    <section>
    <img  class="image" src="assets/img/perro y gato.png" alt="Imagen de perros y gato">
</section>
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
