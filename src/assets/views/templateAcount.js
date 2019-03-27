import{acount} from './../js/auth.js';// esta es la ruta
export const templateAcount = () => {
    const containerAcount = document.createElement('div');
    const contenAcount = `<p>crear cuenta con Google</p>
                            <button id="crear">crear cuenta</button>`
    containerAcount.innerHTML = contenAcount;

    const btn = containerAcount.querySelector('#crear');
    btn.addEventListener('click', () => {
        console.log(acount());
    })
    return containerAcount;
}