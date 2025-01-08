'use client'

import {useState} from "react";
import { Label, Search} from "@navikt/ds-react";
import React from "react";
interface OppgavesøkeResultat {
  label: string;
  href: string;
}
interface SaksøkeResultat {
  saksnummer: string;
  status: string;
}
export const Oppgavesøk = () => {
  const [søkeResultat, setSøkeresultat] = useState<OppgavesøkeResultat[]>([]);
  const [sakSøkeResultat, setSaksøkeresultat] = useState<SaksøkeResultat[]>([]);

  async function utførSøk(søketekst: string) {
    try {
      const oppgaveData: OppgavesøkeResultat[] = await fetch(`${process.env.NEXT_PUBLIC_OPPGAVESTYRING_URL}/api/oppgave/sok`, {
        method: 'POST',
        body: JSON.stringify({ søketekst }),
      }).then((res) => res.json());
      setSøkeresultat(oppgaveData);
      const sakData: SaksøkeResultat[] = await fetch(`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/api/sak/finn`, {
        method: 'POST',
        body: JSON.stringify({ ident: søketekst }),
      }).then((res) => res.json());
      setSaksøkeresultat(sakData);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form
      data-theme={'dark'}
      className={'kelvin-oppgavesok-form'}
      role={'search'}
      onSubmit={(e) => {
        const input = e.currentTarget.elements?.[0] as HTMLInputElement;
        if (input.value) {
          utførSøk(input.value);
        }
        e.preventDefault();
      }}
    >
      <Search label={'Søk etter person eller sak'} variant="secondary" hideLabel={true} size={'small'} />
      <div>
        {sakSøkeResultat.length !== 0 && (
          <>
            <Label>{'Saker'}</Label>
            <ul className={'kelvin-oppgavesok-resultat'}>
              {sakSøkeResultat.map((sak, index) => (
                <li key={`sak-resultat-${index}`}>
                  <a
                    href={`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/sak/${sak.saksnummer}`}
                  >{`${sak.saksnummer} - ${sak.status}`}</a>
                </li>
              ))}
            </ul>
          </>
        )}
        {søkeResultat.length !== 0 && (
          <>
            <Label>{'Oppgaver'}</Label>
            <ul className={'kelvin-oppgavesok-resultat'}>
              {søkeResultat.map((søk, index) => (
                <li key={`oppgave-resultat-${index}`}>
                  <a
                    href={søk.href}
                  >{søk.label}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </form>
  );
};
