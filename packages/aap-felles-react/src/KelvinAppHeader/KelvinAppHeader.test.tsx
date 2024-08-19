import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { KelvinAppHeader } from './KelvinAppHeader';

import { userEvent } from '@testing-library/user-event';
import { BrukerInformasjon } from '@navikt/aap-felles-utils';

const brukerInformasjon: BrukerInformasjon = {
  navn: 'Kjell T Ringen',
};

describe('Header', () => {
  const user = userEvent.setup();
  it('skal vise overskrift i header', async () => {
    render(<KelvinAppHeader brukerInformasjon={brukerInformasjon} />);
    expect(screen.getByText('Kelvin')).toBeVisible();
  });

  it('skal vise navnet på bruker i header', async () => {
    render(<KelvinAppHeader brukerInformasjon={brukerInformasjon} />);
    expect(screen.getByText('Kjell T Ringen')).toBeVisible();
  });

  it('skal vise knapp for å logge ut', async () => {
    render(<KelvinAppHeader brukerInformasjon={brukerInformasjon} />);

    await user.click(screen.getByText('Kjell T Ringen'));

    expect(await screen.findByText('Logg ut')).toBeVisible();
  });
});
