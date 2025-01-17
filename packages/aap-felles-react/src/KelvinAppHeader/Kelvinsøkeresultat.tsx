'use client'

import {HStack, Label} from "@navikt/ds-react";
import React from "react";
export interface Søkeresultat {
  saker: {href: string; label: string}[];
  oppgaver: {href: string; label: string}[];
}
interface Props {
  søkeresultat: Søkeresultat
}
export const Kelvinsøkeresultat = ({søkeresultat}: Props) => {
  return (
    <section>
      <HStack gap={'4'}>
        {søkeresultat.saker.length > 0 && (<div>
          <Label>Saker</Label>
          <ul className={'kelvin-oppgavesok-resultat'}>
            {søkeresultat.saker.map((søk, index) => (
              <li key={`saker-resultat-${index}`}>
                <a
                  href={søk.href}
                >{søk.label}</a>
              </li>
            ))}
          </ul>
        </div>)}
        {søkeresultat.oppgaver.length > 0 && (<div>
          <Label>Oppgaver</Label>
          <ul className={'kelvin-oppgavesok-resultat'}>
            {søkeresultat.oppgaver.map((søk, index) => (
              <li key={`oppgaver-resultat-${index}`}>
                <a
                  href={søk.href}
                >{søk.label}</a>
              </li>
            ))}
          </ul>
        </div>)}
      </HStack>
    </section>
  )
}