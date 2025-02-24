'use client';

import React, {useState} from 'react';
import {Button, Dropdown, HStack, InternalHeader, Link, VStack} from '@navikt/ds-react';
import { Kelvinsøk, SøkeResultat} from './Kelvinsøk';
import {Kelvinsøkeresultat} from "./Kelvinsøkeresultat";
interface BrukerInformasjon {
  navn: string;
  NAVident?: string;
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
          <Link href={`/oppgave/`}>Oppgaveliste</Link>
          <Link href={`/oppgave/produksjonsstyring`}>Produksjonsstyring</Link>
          <Link href={`/saksbehandling/saksoversikt`}>Saksoversikt</Link>
          <Link href={`/postmottak/`}>Postmottak</Link>
          <Link href={`/saksbehandling/sanity`}>Sanity</Link>
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
