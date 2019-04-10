import{templateLogin} from './assets/views/templateLogin.js';
import{templateAcount} from './assets/views/templateAcount.js';
import{templatePostWall} from './assets/views/templatePostWall.js';
import{templateStart} from './assets/views/templateStart.js';
// crear una funcion que reciba el # segun el mach que retorne otra funcion que va imprimir el temple en el html



const cambioRuta = (hash) => {
    console.log(hash);
    if(hash === "" || hash === '#' || hash === '/#' || hash === '#/'){
        return showTemplate('#/home')
    }
    if(hash === '#/loguin' ){
        return showTemplate('#/loguin');
    }
    if(hash === '#/crear'){
        return showTemplate(hash);
    }
    if(hash === '#/muro'){
        return showTemplate(hash);
    }
    if(hash === '#/sesion'){
        return showTemplate(hash);
    }

};

// aqui ponemos las vista que se deben de mostrar ejemplo templateLogin templateMuro templetePerfil etc...
const showTemplate = (hash) =>{
const routerNew = hash.substring(2);
const containerRoot = document.getElementById('root');
containerRoot.innerHTML="";
     // pasamos las condiciones para mostrar los hash de la nueva ruta  
switch(routerNew){
        case 'home':
containerRoot.appendChild(templateStart());
        break;
        case'loguin':// aqui van los hash que en este caso los creamos desde el templateLogin
containerRoot.appendChild(templateLogin());//aqui ponemos las vista que se deben de mostrar
        break;
        case'crear':
containerRoot.appendChild(templateAcount());// bis
        break;
        case'muro':
containerRoot.appendChild(templatePostWall());
        break;
        default:
containerRoot.innerHTML = `<p> Error 404 </p>`
    }
}; 

// inicializar la rutas para ejecutar la funcion cambioRuta

export const initRout = () => {
    window.addEventListener('load', cambioRuta(window.location.hash));


    if('onhashchange' in window) {
        window.onhashchange = () => {
            cambioRuta(window.location.hash);
        };
    }
};

// reconoce un cambio de hash y le paso otro hash al cambioRuta
