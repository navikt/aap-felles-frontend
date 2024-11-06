import { Button } from '@navikt/ds-react';
import { Meta, StoryFn } from '@storybook/react';
import { useConfigForm } from '../FormHook';
import React from 'react';
import { FormField } from '../FormField';
import { ComboboxWrapper } from './ComboboxWrapper';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Combobox',
  component: ComboboxWrapper,
} as Meta;

interface FormFields {
  type: string;
}

export const ComboboxForm: StoryFn = () => {
  const { formFields, form } = useConfigForm<FormFields>({
    type: {
      type: 'combobox',
      label: 'Velg type',
      description: 'Velg en type',
      defaultValue: 'Alternativ 3',
      options: ['Alternativ 1', 'Alternativ 2', 'Alternativ 3'],
      rules: { required: 'Du må velge type' },
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit(() => console.log('submitting'))}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <FormField form={form} formField={formFields.type} />
      <Button variant={'primary'}>Send inn</Button>
    </form>
  );
};

export const MultipleComboboxForm: StoryFn = () => {
  const { formFields, form } = useConfigForm<FormFields>({
    type: {
      type: 'combobox_multiple',
      label: 'Velg type',
      description: 'Velg en type',
      defaultValue: ['Alternativ 1'],
      options: ['Alternativ 1', 'Alternativ 2', 'Alternativ 3'],
      rules: { required: 'Du må velge type' },
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit(() => console.log('submitting'))}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <FormField form={form} formField={formFields.type} />
      <Button variant={'primary'}>Send inn</Button>
    </form>
  );
};
