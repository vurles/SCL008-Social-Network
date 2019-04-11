export const validateMail = (email) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

export const validateData = (namePet, typePet, email, contrasena) => {
    if(namePet === '' || typePet === '' || email === '' || contrasena === ''){
        return false;
    }
    else{
        return true;
    }
}

export const validateInput = (email, password) => {
     if(email === '' || password === ''){
        return false;
    }
    else{
        return true;
    }
}
export const validatePass = (password) => {
    console.log(typeof(password))
    if(typeof(password) !== "string"){
        return "Error en tipo de dato"
    }
    if(password.length < 6) {
        return false;
    } else {
        return true;
    }

    /*
    if (password === '12345' ) {
        return false;
    }

    return true; */
    }

   