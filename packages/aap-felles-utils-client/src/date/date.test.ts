import {
  formaterDatoForVisning,
  formaterDatoMedDag,
  formaterDatoTidForVisning,
  formaterDatoUtenDag,
  formaterDatoUtenÅr,
} from './date';

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

describe('formaterDatoMedDag', () => {
  it('skal returnere formatert dato når man sender inn en string', function () {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoMedDag(dato)).toBe('25. mars 2022');
  });

  it('skal returnere formatert dato når man sender inn et datoobjekt', function () {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoMedDag(new Date(dato))).toBe('25. mars 2022');
  });
});

describe('formaterDatoUtenDag', () => {
  it('skal returnere formatert dato når man sender inn en string', function () {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoUtenDag(dato)).toBe('mars 2022');
  });

  it('skal returnere formatert dato når man sender inn et datoobjekt', function () {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoUtenDag(new Date(dato))).toBe('mars 2022');
  });
});

describe('formaterDatoUtenÅr', () => {
  it('skal returnere formatert dato når man sender inn en string', function () {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoUtenÅr(dato)).toBe('25. mars');
  });

  it('skal returnere formatert dato når man sender inn et datoobjekt', function () {
    const dato = '2022-03-25T12:22:43';
    expect(formaterDatoUtenÅr(new Date(dato))).toBe('25. mars');
  });
});
