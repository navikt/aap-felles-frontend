import {formaterDatoForVisning} from "./date";

describe('formaterDatoForPresentasjon', () => {
    it('skal returnere formatert dato når man sender inn gyldig ISO string med tidsstempel', () => {
        const dato = '2022-03-25T12:22:43';
        expect(formaterDatoForVisning(dato)).toBe('25.03.2022')
    });

    it('skal returnere formatert dato når man sender inn gyldig ISO uten tidsstempel', () => {
        const dato = '2023-03-25';
        expect(formaterDatoForVisning(dato)).toBe('25.03.2023')
    });

    it('skal returnere formatert dato når man sender inn et datoobjekt', () => {
        const dato = new Date('1995-02-19')
        expect(formaterDatoForVisning(dato)).toBe('19.02.1995')
    });
})
