'use client'

import {Dispatch, SetStateAction} from "react";
import {  Search} from "@navikt/ds-react";
import React from "react";

export interface SøkeResultat {
  oppgaver?: {
    label: string;
    href: string;
  }[],
  saker?: {href: string; label: string}[];
}
interface Props {
  setSøkeresultat:  Dispatch<SetStateAction<SøkeResultat | undefined>>;
}

export const Kelvinsøk = ({ setSøkeresultat }: Props) => {

  async function utførSøk(søketekst: string) {
    let søkedata: SøkeResultat = {};
    try {
      søkedata = await fetch(`/api/kelvinsok`, {
        method: 'POST',
        body: JSON.stringify({ søketekst }),
      }).then((res) => res.json());
    } catch (error) {
      console.error(error)
    }
    setSøkeresultat(søkedata);
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
