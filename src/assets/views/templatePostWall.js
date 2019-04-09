import {loginUser, login, eyes, chaopescao } from './../js/auth.js';
export const templatePostWall = (user) => {
            console.log(user);
            console.log(firebase.auth().currentUser);
        const containerPostWall = document.createElement('div');// creamos el div para mostar la info que desamos ver
        const contentPost = ` <div class= "postForm">
            <h3>TinPet</h3>
            <textarea cols="60" rows="30"></textarea>
            <button id="muro">Publicar</button>
            </div>`
    containerPostWall.innerHTML = contentPost;
        const btn = containerPostWall.querySelector('#muro');
            btn.addEventListener('click', () => {
            console.log(acount());
        })
            eyes();
return containerPostWall;
};
