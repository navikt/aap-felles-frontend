'use client'

import {useState} from "react";
import {Search} from "@navikt/ds-react";
import React from "react";
interface Søkeresultat {
  label: string;
  href: string;
}
export const Oppgavesøk = () => {
  const [søkeResultat, setSøkeresultat] = useState<Søkeresultat[]>([]);
  async function utførSøk(søketekst: string) {
    const data: Søkeresultat[] = await fetch(`${process.env.NEXT_PUBLIC_OPPGAVESTYRING_URL}/api/oppgave/sok`, {
      method: 'POST',
      body: JSON.stringify({ søketekst }),
    }).then((res) => res.json());
    setSøkeresultat(data);
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

      {søkeResultat.length !== 0 && (
        <ul className={'kelvin-oppgavesok-resultat'}>
          {søkeResultat.map((søk, index) => (
            <li key={`resultat-${index}`}>
              <a
                href={søk.href}
              >{søk.label}</a>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
