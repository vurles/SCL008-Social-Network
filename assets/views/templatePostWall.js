
import {loginUser, login, eyes, singOut } from './../js/auth.js';
export const templatePostWall = (user) => {
            console.log(user);
            console.log(firebase.auth().currentUser);
        const containerPostWall = document.createElement('div');// creamos el div para mostar la info que desamos ver
        const contentPost = ` <div class= "postForm">
        <header>
            <div class="logo">
            <a href="index.html"> 
            <img src="assets/img/tinpet.png" style="width: 150px;" alt="Logo"></a>
        </div>
    </header>
            <h3>Muro</h3>
            <textarea cols="30" rows="6"placeholder="descripcion"></textarea>
            <button id="muro" class = "createBtn">Publicar</button>
            <section>
    <img  class="image" src="assets/img/perro y gato.png" alt="Imagen de perros y gato">
</section>
            </div>`
    containerPostWall.innerHTML = contentPost;
        const btn = containerPostWall.querySelector('#muro');
            btn.addEventListener('click', () => {
            console.log(acount());
        })
        const btnChao = containerPostWall.querySelector('#logout');
        btnChao.addEventListener('click', () => {
            singOut();
        })
        
return containerPostWall;
};
