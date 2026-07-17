import { Client, Issuer } from "openid-client";
import {
    JWSHeaderParameters,
    jwtVerify,
    createRemoteJWKSet,
    FlattenedJWSInput,
    GetKeyFunction
} from "jose";
import { logWarning } from "../../logger";

const DEPRECATION_WARNING =
  'Denne funksjonen er deprecated og vil bli fjernet. Bruk @navikt/oasis i stedet.';

let _issuer: Issuer<Client>;
let _remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;

export async function validerToken(token: string | Uint8Array) {
    logWarning(DEPRECATION_WARNING);
    return jwtVerify(token, await jwks(), {
        issuer: (await issuer()).metadata.issuer,
    });
}

async function jwks() {
    if (typeof _remoteJWKSet === "undefined") {
        _remoteJWKSet = createRemoteJWKSet(new URL(process.env.AZURE_OPENID_CONFIG_JWKS_URI as string));
    }

    return _remoteJWKSet;
}

async function issuer() {
    if (typeof _issuer === "undefined") {
        if (!process.env.AZURE_APP_WELL_KNOWN_URL)
            throw new Error(`Miljøvariabelen "AZURE_APP_WELL_KNOWN_URL" må være satt`);
        _issuer = await Issuer.discover(process.env.AZURE_APP_WELL_KNOWN_URL);
    }
    return _issuer;
}
