import { format, parseISO } from 'date-fns';
import { nb } from 'date-fns/locale';

/**
 * Formaterer dato på følgende format: 01.01.2023
 */
export function formaterDatoForVisning(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(parseISO(dato), 'dd.MM.yyyy', { locale: nb });
  } else {
    return format(new Date(dato), 'dd.MM.yyyy', { locale: nb });
  }
}

/**
 * Formaterer dato på følgende format: 01.01.2023 13:00
 */
export function formaterDatoTidForVisning(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'dd.MM.yyyy HH:mm');
  } else {
    return format(dato, 'dd.MM.yyyy HH:mm');
  }
}

/**
 * Formaterer dato på følgende format: 01. jan 2023
 */
export function formaterDatoMedDag(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'dd. LLLL yyyy', { locale: nb });
  } else {
    return format(dato, 'dd. LLLL yyyy', { locale: nb });
  }
}

/**
 * Formaterer dato på følgende format: januar 2023
 */
export function formaterDatoUtenDag(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'LLLL yyyy', { locale: nb });
  } else {
    return format(dato, 'LLLL yyyy', { locale: nb });
  }
}

/**
 * Formaterer dato på følgende format: 01. januar
 */
export function formaterDatoUtenÅr(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'dd. LLLL', { locale: nb });
  } else {
    return format(dato, 'dd. LLLL', { locale: nb });
  }
}
