import { format, parseISO } from 'date-fns';
import { nb } from 'date-fns/locale';

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
