import {format, parseISO} from "date-fns";
import {nb} from "date-fns/locale";

const DATO_FORMATER= Object.freeze({
    ddMMyyyy: 'dd.MM.yyyy',
    ddMMMyyyy: 'dd. MMM yyyy',
    ddMMyyyy_HHmm: 'dd.MM.yyyy HH:mm',
});

export function formaterDatoForVisning(dato: string | Date): string {
    if (typeof dato === 'string'){
        return format(parseISO(dato), DATO_FORMATER.ddMMyyyy, { locale: nb });
    } else {
        return format(new Date(dato), DATO_FORMATER.ddMMyyyy, { locale: nb });
    }
}






