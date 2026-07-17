import { createRemoteJWKSet, FlattenedJWSInput, GetKeyFunction, JWSHeaderParameters, jwtVerify } from 'jose';
import { Client, Issuer } from 'openid-client';
import { logWarning } from '../../logger';

const DEPRECATION_WARNING =
  'Denne funksjonen er deprecated og vil bli fjernet. Bruk @navikt/oasis i stedet.';

let _issuer: Issuer<Client>;
let _remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;

async function validerToken(token: string | Uint8Array) {
  return jwtVerify(token, await jwks(), {
    issuer: (await issuer()).metadata.issuer,
  });
}

async function jwks() {
  if (typeof _remoteJWKSet === 'undefined') {
    const iss = await issuer();
    _remoteJWKSet = createRemoteJWKSet(new URL(<string>iss.metadata.jwks_uri));
  }

  return _remoteJWKSet;
}

async function issuer() {
  if (typeof _issuer === 'undefined') {
    if (!process.env.IDPORTEN_WELL_KNOWN_URL)
      throw new Error('Miljøvariabelen "IDPORTEN_WELL_KNOWN_URL" må være satt');
    _issuer = await Issuer.discover(process.env.IDPORTEN_WELL_KNOWN_URL);
  }
  return _issuer;
}

export async function verifyIdportenAccessToken(bearerToken: string) {
  logWarning(DEPRECATION_WARNING);
  const token = bearerToken.split(' ')[1];

  const verified = await validerToken(token);

  if (verified.payload.client_id !== process.env.IDPORTEN_CLIENT_ID) {
    throw new Error('client_id matcher ikke min client ID');
  }

  if (!isValidAcr(verified.payload.acr as string)) {
    throw new Error(`Har ikke gyldig sikkerhetsnivå. Forventet Level4 eller idporten-loa-high, men fikk ${verified.payload.acr}`);
  }
}

export const isValidAcr = (acr: string) => ['Level4', 'idporten-loa-high'].includes(acr)
