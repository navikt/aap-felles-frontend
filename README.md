# aap-felles-frontend

## Lokal utvikling for react-komponenter

```
yarn
yarn storybook
```

Ved push til main vil storybooken også deployes til github pages https://navikt.github.io/aap-felles-frontend/

## Bygg og testing av workspace

Bygg av pakker

```
yarn workspaces foreach --all --exclude . run build
```

Test av pakker

```
yarn workspaces foreach --all --exclude . run test
```

Av en eller annen grunn fungerer det ikke å kjøre `yarn build` eller `yarn test` direkte fra root i prosjektet, så det er kommandoene over som må brukes.

## Versjonering av pakker

Vi bruker `changeset` for å styre versjonering av pakkene våre. Foreløpig er det ikke satt opp støtte for dette i CI, så kommandoene må kjøres manuelt før commit.

```
yarn changeset
yarn changeset version
git add // alle endringene dine
git commit -m "En fin melding som forklarer hvorfor endringene ble gjort"
git push
```

`publish` kommandoen vil feile, siden den ikke får dyttet ut pakkene til github, men den vil sette riktig versjonsnummer og oppdatere changelog som brukes av changeset før publisering i Github Actions.

## Legg til dependency i riktig workspace

Pass på at dependencies legges i riktig packages/aap-felles-\*\*\*\*/package.json. Eksempler:

```
yarn workspace @navikt/aap-felles-react add PACKAGENAME
yarn workspace @navikt/aap-felles-react add PACKAGENAME -dev
```

## Oppgradering av pakker

Pakker oppgraderes med yarn. Oppgradering av pakker oppdaterer alle workspaces pakken er brukt

```
yarn upgrade-interactive
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
