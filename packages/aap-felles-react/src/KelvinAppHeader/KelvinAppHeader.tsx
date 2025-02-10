'use client';

import React, {useState} from 'react';
import {Button, Dropdown, HStack, InternalHeader, Link, VStack} from '@navikt/ds-react';
import { Kelvinsøk, SøkeResultat} from './Kelvinsøk';
import {Kelvinsøkeresultat} from "./Kelvinsøkeresultat";
type SystemUrl = {
  dev: string;
  prod: string;
}
const saksbehandlingUrl: SystemUrl = {
  dev: "https://aap-saksbehandling.ansatt.dev.nav.no",
  prod: 'TBD'
}
const produksjonsstyringUrl: SystemUrl = {
  dev: "https://aap-produksjonsstyring.ansatt.dev.nav.no",
  prod: 'TBD'
}
const postmottakUrl: SystemUrl = {
  dev: "https://aap-postmottak.ansatt.dev.nav.no",
  prod: 'TBD'
}
interface BrukerInformasjon {
  navn: string;
  NAVident?: string;
}
function getUrl(systemUrl: SystemUrl) {
  if(window && window.location) {
    if(window.location.href.includes('intern.dev') || window.location.href.includes('ansatt.dev')) {
      return systemUrl.dev;
    }
    return systemUrl.prod;
  }
}

const Brukermeny = ({ brukerInformasjon }: { brukerInformasjon: BrukerInformasjon }) => (
  <Dropdown>
    <InternalHeader.UserButton name={brukerInformasjon.navn} as={Dropdown.Toggle} />
    <Dropdown.Menu>
      <Dropdown.Menu.List>
        <Dropdown.Menu.List.Item>
          <Link href={'/oauth2/logout'} className="kelvin-app-header-link">
            Logg ut
          </Link>
        </Dropdown.Menu.List.Item>
      </Dropdown.Menu.List>
    </Dropdown.Menu>
  </Dropdown>
);
export const KelvinAppHeader = ({ brukerInformasjon }: { brukerInformasjon: BrukerInformasjon }) => {
  const [søkeresultat, setSøkeresultat] = useState<SøkeResultat | undefined>(undefined);
  return (
    <InternalHeader className="kelvin-app-header">
      <div className={`kelvin-app-main-header ${søkeresultat ? 'kelvin-app-main-header-borderBottom' : ''}`}>
        <div className="kelvin-app-header-leftSide">
          <InternalHeader.Title href="/">Kelvin</InternalHeader.Title>
          <Kelvinsøk setSøkeresultat={setSøkeresultat}/>
          <Link href={`${getUrl(produksjonsstyringUrl)}/oppgave`}>Oppgaveliste</Link>
          <Link href={`${getUrl(produksjonsstyringUrl)}/produksjonsstyring`}>Produksjonsstyring</Link>
          <Link href={`${getUrl(saksbehandlingUrl)}/saksoversikt`}>Saksoversikt</Link>
          <Link href={`${getUrl(postmottakUrl)}/postmottak`}>Postmottak</Link>
          <Link href={`${getUrl(saksbehandlingUrl)}/sanity`}>Sanity</Link>
        </div>
        <Brukermeny brukerInformasjon={brukerInformasjon}/>
      </div>
      {søkeresultat && <VStack padding={'2'}>
          <HStack justify={'space-between'} >
              <p>Søkeresultater</p>
              <Button variant={'secondary'} size={'small'} onClick={() => setSøkeresultat(undefined)}>Lukk</Button>
          </HStack>
          <Kelvinsøkeresultat søkeresultat={søkeresultat}/>
      </VStack>}
    </InternalHeader>
  );
}
