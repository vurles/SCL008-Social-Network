import {loginUser, login, eyes, chaopescao } from './../js/auth.js';
export const templatePostWall = (user) => {
            console.log(user);
            console.log(firebase.auth().currentUser);
        const containerPostWall = document.createElement('div');// creamos el div para mostar la info que desamos ver
        const contentPost = ` <div class= "postForm">
            <h3>TinPet</h3>
            <textarea cols="6" rows="4"></textarea>
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
<<<<<<< Updated upstream
            eyes();
=======
        const btnChao = containerPostWall.querySelector('#logout');
        btnChao.addEventListener('click', () => {
            singOut();
        })
        
>>>>>>> Stashed changes
return containerPostWall;
};
