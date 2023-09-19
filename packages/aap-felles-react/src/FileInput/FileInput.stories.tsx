import { Meta, StoryFn } from '@storybook/react';

import { FileInput, FileInputProps } from './FileInput';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FileInput',
  component: FileInput,
} as Meta;

export const Primary: StoryFn<FileInputProps> = (args) => (
  <FileInput
    {...args}
    heading={'Annen dokumentasjon'}
    ingress={'Her kan du laste opp filer'}
    inputId={'annenDokumentasjon'}
  />
);
