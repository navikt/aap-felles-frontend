# aap-felles-frontend

## Lokal utvikling for react-komponenter

```
npm install
npm run storybook
```

Ved push til main vil storybooken også deployes til github pages https://navikt.github.io/aap-felles-frontend/

## Legg til dependency i riktig workspace
Pass på at dependencies legges i riktig packages/aap-felles-\*\*\*\*/package.json. Eksempler:

```
npm install @navikt/ds-css -w "@navikt/aap-felles-react"
npm install pino -w "@navikt/aap-felles-utils"
```

## aap-felles-utils

Felles funksjoner som brukes til å logge inn og autentisere med idporten.

auth-biblopteket krever at følgende env-variabler settes i appen:
| env-variabel | kilde |
|--------------|-------|
|WONDERWALL_REDIRECT_DESTINATION|app|
|IDPORTEN_WELL_KNOWN_URL|nais|
|TOKEN_X_WELL_KNOWN_URL|nais|
|TOKEN_X_PRIVATE_JWK|nais|
|TOKEN_X_CLIENT_ID|nais|

## aap-felles-react

Felles react-komponenter.

## aap-felles-utils-client

Felles hjelpemetoder
