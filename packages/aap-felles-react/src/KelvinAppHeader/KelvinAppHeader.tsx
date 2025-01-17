'use client';

import React, {useState} from 'react';
import {Button, Dropdown, HStack, InternalHeader, Link, VStack} from '@navikt/ds-react';
import { Kelvinsøk} from './Kelvinsøk';
import {Kelvinsøkeresultat, Søkeresultat} from "./Kelvinsøkeresultat";

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
  const [søkeresultat, setSøkeresultat] = useState<Søkeresultat | undefined>(undefined);
  return (
    <InternalHeader className="kelvin-app-header">
      <div className={`kelvin-app-main-header ${søkeresultat ? 'kelvin-app-main-header-borderBottom' : ''}`}>
        <div className="kelvin-app-header-leftSide">
          <InternalHeader.Title href="/">Kelvin</InternalHeader.Title>
          <Kelvinsøk setSøkeresultat={setSøkeresultat}/>
          <Link href={`${process.env.NEXT_PUBLIC_OPPGAVESTYRING_URL}/`}>Oppgaveliste</Link>
          <Link href={`${process.env.NEXT_PUBLIC_PRODUKSJONSSTYRING_URL}/`}>Oppgaveliste</Link>
          <Link href={`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/saksoversikt`}>Saksoversikt</Link>
          <Link href={`${process.env.NEXT_PUBLIC_POSTMOTTAK_URL}/postmottak`}>Postmottak</Link>
          <Link href={`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/sanity`}>Sanity</Link>
        </div>
        <Brukermeny brukerInformasjon={brukerInformasjon}/>
      </div>
      {søkeresultat && <VStack padding={'2'}>
          <HStack justify={'space-between'} className={'kelvin-oppgavesok-resultat-container'}>
              <p>Søkeresultater</p>
              <Button variant={'secondary'} size={'small'} onClick={() => setSøkeresultat(undefined)}>Lukk</Button>
          </HStack>
          <Kelvinsøkeresultat søkeresultat={søkeresultat}/>
      </VStack>}
    </InternalHeader>
  );
}
