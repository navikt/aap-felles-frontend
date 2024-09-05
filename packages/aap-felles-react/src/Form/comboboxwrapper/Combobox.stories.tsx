import { BodyShort, Button } from '@navikt/ds-react';
import { Meta, StoryFn } from '@storybook/react';
import { useConfigForm } from '../FormHook';
import React from 'react';
import { FormField } from '../FormField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Combobox',
  component: ComboboxForm,
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<{}> = (args) => <ComboboxForm {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <BodyShort spacing>Dette er tekst som havner inne i Luca</BodyShort>,
};

interface FormFields {
  type: string;
}

interface Props {
  defaultValue?: string;
}

function ComboboxForm(props: Props) {
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
    <form onSubmit={form.handleSubmit(() => console.log('submitting'))}>
      <FormField form={form} formField={formFields.type} />
      <Button variant={'primary'}>Send inn</Button>
    </form>
  );
}
