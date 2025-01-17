'use client'

import {Dispatch, SetStateAction} from "react";
import {  Search} from "@navikt/ds-react";
import React from "react";
import {Søkeresultat} from "./Kelvinsøkeresultat";
interface OppgavesøkeResultat {
  label: string;
  href: string;
}
interface SaksøkeResultat {
  saksnummer: string;
  periode: {
    fom: string;
    tom: string;
  };
}
interface Props {
  setSøkeresultat:  Dispatch<SetStateAction<Søkeresultat | undefined>>;
}
export const Kelvinsøk = ({ setSøkeresultat }: Props) => {

  async function utførSøk(søketekst: string) {
    const isFnr = søketekst.length === 11;
    let oppgaveData: OppgavesøkeResultat[] = [];
    try {
      oppgaveData = await fetch(`${process.env.NEXT_PUBLIC_OPPGAVESTYRING_URL}/api/oppgave/sok`, {
        method: 'POST',
        body: JSON.stringify({ søketekst }),
      }).then((res) => res.json());
    } catch (error) {
      console.error(error)
    }
    let sakData: SaksøkeResultat[] = [];
    if(isFnr){
      try {
        sakData = await fetch(`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/api/sak/finn`, {
          method: 'POST',
          body: JSON.stringify({ ident: søketekst }),
        }).then((res) => res.json());
      } catch (error) {
        console.error(error)
      }
    }
    const resData: Søkeresultat = {
      oppgaver: oppgaveData,
      saker: sakData.map(sak => ({
        href: `${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/sak/${sak.saksnummer}`,
        label: `${sak.periode.fom} - ${sak.periode.tom}  (${sak.saksnummer})`
      }))
    }
    setSøkeresultat(resData);
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
    </form>
  );
};
