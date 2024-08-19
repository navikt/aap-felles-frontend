'use client';

import React from 'react';
import { BrukerInformasjon } from '@navikt/aap-felles-utils';
import { Dropdown, InternalHeader, Link } from '@navikt/ds-react';

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

export const KelvinAppHeader = ({ brukerInformasjon }: { brukerInformasjon: BrukerInformasjon }) => (
  <InternalHeader className="kelvin-app-header">
    <div className="kelvin-app-header-leftSide">
      <InternalHeader.Title href="/">Kelvin</InternalHeader.Title>
      <Link href={`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/sanity`}>Sanity</Link>
      <Link href={`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/saksoversikt`}>Saksoversikt</Link>
      <Link href={`${process.env.NEXT_PUBLIC_OPPGAVESTYRING_URL}/oppgaveliste`}>Oppgaveliste</Link>
      <Link href={`${process.env.NEXT_PUBLIC_POSTMOTTAK_URL}/postmottak`}>Postmottak</Link>
    </div>

    <Brukermeny brukerInformasjon={brukerInformasjon} />
  </InternalHeader>
);
