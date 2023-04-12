import { formaterDatoForVisning, formaterDatoTidForVisning } from './date';

describe('formaterDatoForVisning', () => {
  it('skal returnere formatert dato når man sender inn gyldig ISO string med tidsstempel', () => {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoForVisning(dato)).toBe('25.03.2022');
  });

  it('skal returnere formatert dato når man sender inn gyldig ISO uten tidsstempel', () => {
    const dato = '2023-03-25';
    expect(formaterDatoForVisning(dato)).toBe('25.03.2023');
  });

  it('skal returnere formatert dato når man sender inn et datoobjekt', () => {
    const dato = new Date('1995-02-19');
    expect(formaterDatoForVisning(dato)).toBe('19.02.1995');
  });
});

describe('formaterDatoTidForVisning', () => {
  it('skal returnere formatert dato og tidsstempel når man sender inn en ISO string', function () {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoTidForVisning(dato)).toBe('25.03.2022 12:22');
  });

  it('skal returner formatert dato og tidsstempel når man sender inn et datoobjekt', () => {
    const dato = new Date('2022-03-25T12:22:43');
    expect(formaterDatoTidForVisning(dato)).toBe('25.03.2022 12:22');
  });
});
