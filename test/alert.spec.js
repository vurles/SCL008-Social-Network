import { validateMail, validateInput, validateData ,validatePass} from './../src/assets/js/alert.js';


describe('validateMail', () => {
    it('Debería retornar false, si el correo no es valido', () => {
        expect(validateMail('ftapiamoralesgmail.com')).toBe(false);
    })
})

describe('validateMail', () => {
    it('Debería retornar true, si el correo es valido', () => {
        expect(validateMail('ftapiamorales@gmail.com')).toBe(true);
    })
})

describe('validateInput', () => {
    it('Debería retornar false, si los input para iniciar sesión estan vacíos', () => {
        expect(validateInput('','')).toBe(false);
        expect(validateInput('','123456')).toBe(false);
        expect(validateInput('ftapiamorales@gmail.com','')).toBe(false);
    })
})

describe('validateInput', () => {
    it('Debería retornar true, si los input para iniciar sesión estan completos', () => {
        expect(validateInput('ftapiamorales@gmail.com','123456')).toBe(true);
    })
})

describe('validateData', () => {
    it('Debería retornar false, si los input para registrarse estan vacíos', () => {
        expect(validateData('','','','')).toBe(false);
        expect(validateData('manchon','perro','ftapiamorales@gmail.com','')).toBe(false);
        expect(validateData('edu','gato','','567890')).toBe(false);
        expect(validateData('lilu','','ftapiamorales@gmail.com','123456')).not.toBe(true);
        expect(validateData('','loro','ftapiamorales@gmail.com','123456')).not.toBe(true);

    })
})

describe('validateData', () => {
    it('Debería retornar true, si los input para registrarse estan completos', () => {
        expect(validateData('Amanda','Perro','ftapiamorales@gmail.com','123456')).toBe(true);
    })
})
describe ('validatePass',() =>{
    it('Password deberia tener igual o mas de 6 caracteres',() => {
        expect(validatePass('123456')).not.toBe(false);
    }) 
    it ('si password tiene menos de 6 caracteres',() => {
        expect(validatePass('12345')).toBe (false);
    })
    it('Deberia retornar "Error en tipo de dato" si password no es tipo string',() => {
        expect(validatePass(123456)).toBe('Error en tipo de dato');
    })
})

