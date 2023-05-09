import { format, parseISO } from 'date-fns';
import { nb } from 'date-fns/locale';

/**
 * This is my cool function
 *
 * @param dato
 */
export function formaterDatoForVisning(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(parseISO(dato), 'dd.MM.yyyy', { locale: nb });
  } else {
    return format(new Date(dato), 'dd.MM.yyyy', { locale: nb });
  }
}

export function formaterDatoTidForVisning(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'dd.MM.yyyy HH:mm');
  } else {
    return format(dato, 'dd.MM.yyyy HH:mm');
  }
}

export function formaterDatoMedDag(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'dd. LLLL yyyy', { locale: nb });
  } else {
    return format(dato, 'dd. LLLL yyyy', { locale: nb });
  }
}

export function formaterDatoUtenDag(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'LLLL yyyy', { locale: nb });
  } else {
    return format(dato, 'LLLL yyyy', { locale: nb });
  }
}

export function formaterDatoUtenÅr(dato: string | Date): string {
  if (typeof dato === 'string') {
    return format(new Date(dato), 'dd. LLLL', { locale: nb });
  } else {
    return format(dato, 'dd. LLLL', { locale: nb });
  }
}
