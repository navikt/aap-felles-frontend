import React from 'react';
import { useConfigForm } from '../FormHook';
import { FormField, ValuePair } from '../FormField';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('async combosearch', () => {
  it('skal vise label', () => {
    render(<TestComponent isMulti={false} />);
    const label = screen.getByText('Diagnose');
    expect(label).toBeVisible();
  });

  it('skal vise feilmelding dersom feltet ikke er besvart', async () => {
    render(<TestComponent isMulti={false} />);
    const knapp = screen.getByText('Send inn');
    await user.click(knapp);
    const feilmelding = screen.getByText('Du må oppgi en diagnose');
    expect(feilmelding).toBeVisible();
  });

  it('Det skal dukke opp forslag når man skriver inn noe', async () => {
    render(<TestComponent isMulti={false} />);
    const input = screen.getByRole('combobox', {
      name: /diagnose/i,
    });

    expect(
      screen.queryByRole('option', {
        name: /covid/i,
      })
    ).not.toBeInTheDocument();

    await user.type(input, 'co');

    expect(
      screen.getByRole('option', {
        name: /covid/i,
      })
    ).toBeVisible();
  });

  it('Det skal vise en tekst som sier at det ikke er funnet noe dersom det ikke er noen valg som samsvarer med søkeresultat', async () => {
    render(<TestComponent isMulti={false} />);
    const input = screen.getByRole('combobox', {
      name: /diagnose/i,
    });

    await user.type(input, 'dennefinnesikke');

    const ingenTreffTekst = screen.getByText(/ingen treff/i);
    expect(ingenTreffTekst).toBeVisible();
  });

  it('Det skal være mulig å velge en verdi', async () => {
    render(<TestComponent isMulti={false} />);
    const input = screen.getByRole('combobox', {
      name: /diagnose/i,
    });

    expect(
      screen.queryByRole('option', {
        name: /covid/i,
      })
    ).not.toBeInTheDocument();

    await user.type(input, 'co');

    const covidOption = screen.getByRole('option', {
      name: /covid/i,
    });

    await user.click(covidOption);

    // Valget skal være borte
    expect(
      screen.queryByRole('option', {
        name: /covid/i,
      })
    ).not.toBeInTheDocument();

    // Men verdien er satt
    expect(screen.getByText('covid')).toBeVisible();
  });

  it('Det skal være mulig å velge flere verdier når det er multiselect', async () => {
    render(<TestComponent isMulti={true} />);
    const input = screen.getByRole('combobox', {
      name: /diagnose/i,
    });

    await user.type(input, 'co');

    const covidOption = screen.getByRole('option', {
      name: /covid/i,
    });

    await user.click(covidOption);

    await user.type(input, 'bro');
    const bronkittOption = screen.getByRole('option', {
      name: /bronkitt/i,
    });

    await user.click(bronkittOption);

    const covid = screen.getByText(/covid/i);
    const bronkitt = screen.getByText(/bronkitt/i);

    expect(covid).toBeVisible();
    expect(bronkitt).toBeVisible();
  });
});

interface FormFields {
  diagnose: ValuePair[];
}

async function fetcher(value: string) {
  const diagnoser = ['covid', 'kyssesyken', 'bronkitt'];
  const filteredDiagnoser: ValuePair[] = diagnoser
    .filter((diagnose) => diagnose.includes(value))
    .map((diagnose) => {
      return { value: diagnose, label: diagnose };
    });

  return filteredDiagnoser;
}

function TestComponent({ isMulti }: { isMulti: boolean }) {
  const { form, formFields } = useConfigForm<FormFields>({
    diagnose: {
      type: 'async_combobox',
      isMulti: isMulti,
      label: 'Diagnose',
      rules: { required: 'Du må oppgi en diagnose' },
      fetcher: fetcher,
    },
  });

  return (
    <form onSubmit={form.handleSubmit(() => console.log('wtf'))}>
      <FormField form={form} formField={formFields.diagnose} />
      <button>Send inn</button>
    </form>
  );
}
