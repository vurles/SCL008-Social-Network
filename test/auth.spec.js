import { validateMail } from './../src/assets/js/alert.js';

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