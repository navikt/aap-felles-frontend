# aap-felles-frontend

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

Vi bruker `changeset` for å styre versjonering av pakkene våre. Ta med `PATCH`, `MINOR` eller `MAJOR` i commit-meldingen for å starte en release med tilsvarende versjonsendring.

Github Actions oppretter da automatisk en changeset og en `Version Packages`-pull request. Når denne pull requesten merges, publiseres pakkene automatisk.

Det er også mulig å opprette og anvende en changeset manuelt før commit:

```
yarn changeset
yarn changeset version
git add .
git commit -m "En fin melding som forklarer hvorfor endringene ble gjort"
git push
```

Github Actions publiserer pakkene etter at versjonsendringene er pushet til `main`.

## Legg til dependency i riktig workspace

Pass på at dependencies legges i riktig packages/aap-felles-\*\*\*\*/package.json. Eksempler:

```
yarn workspace @navikt/aap-felles-utils add PACKAGENAME
yarn workspace @navikt/aap-felles-utils add PACKAGENAME -dev
```

## Oppgradering av pakker

Pakker oppgraderes med yarn. Oppgradering av pakker oppdaterer alle workspaces pakken er brukt

```
yarn upgrade-interactive
```

## aap-felles-utils

Felles funksjoner som brukes til å logge inn og autentisere med idporten.

auth-biblopteket krever at følgende env-variabler settes i appen:
| env-variabel                    | kilde |
|---------------------------------|-------|
| WONDERWALL_REDIRECT_DESTINATION | app   |
| IDPORTEN_WELL_KNOWN_URL         | nais  |
| TOKEN_X_WELL_KNOWN_URL          | nais  |
| TOKEN_X_PRIVATE_JWK             | nais  |
| TOKEN_X_CLIENT_ID               | nais  |
