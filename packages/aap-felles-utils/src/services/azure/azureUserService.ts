import { isLocal } from '../../environments/environments';
import { headers } from 'next/headers';
import { getAccessTokenOrRedirectToLogin } from '../../auth//authentication/authentication';
import { validerToken } from './azuread';

export interface BrukerInformasjon {
  navn: string;
  NAVident?: string;
}

export const hentBrukerInformasjon = async (): Promise<BrukerInformasjon> => {
  if (isLocal()) {
    return { navn: 'Iren Panikk', NAVident: 'z123456' };
  }
  const requestHeaders = headers();
  const token = getAccessTokenOrRedirectToLogin(requestHeaders);

  const JWTVerifyResult = await validerToken(token);
  return { navn: JWTVerifyResult.payload.name as string, NAVident: JWTVerifyResult.payload.NAVident as string };
};
