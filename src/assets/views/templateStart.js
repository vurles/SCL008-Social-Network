import {loginUser,login,acount,eyes} from "../js/auth.js";
export const templateStart = () => {    
        const containerStart = document.createElement('div');
        const contentStart = `
        <header>
            <div class="logo">
            <a href="index.html"> 
            <img src="assets/img/tinpet.png" style="width: 150px;" alt="Logo"></a>
        </div>
    </header>
    <section>
        <form class ="incomeButton">
            <button class="login">
                <a href="#/loguin">Login Google</a>
            </button>
            <button class="create">
                <a href="#/crear">Crear cuenta</a>
            </button>
            <button class="session">
                <a href="#/sesion">Iniciar sesión</a>
            </button>
        </form> 
    </section>
    <section>
    <img  class="image" src="assets/img/perro y gato.png" alt="Imagen de perros y gato">
</section>`
        containerStart.innerHTML = contentStart;

return containerStart;
}
