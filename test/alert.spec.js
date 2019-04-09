import { validateMail, validateInput, validateData } from '../src/assets/js/alert.js';

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
    })
})

describe('validateData', () => {
    it('Debería retornar true, si los input para registrarse estan completos', () => {
        expect(validateData('Amanda','Perro','ftapiamorales@gmail.com','123456')).toBe(true);
    })
})
