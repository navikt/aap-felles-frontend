import { Meta, StoryFn } from '@storybook/react';

import { FileInput, FileInputProps, Vedlegg } from './FileInput';
import React, { useState } from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FileInput',
  component: FileInput,
} as Meta;

export const Primary: StoryFn<FileInputProps> = (args) => {
  const [files, setFiles] = useState<Vedlegg[]>([]);
  return (
    <FileInput
      {...args}
      heading={'Annen dokumentasjon'}
      id={'filopplasting'}
      uploadUrl={'/upload'}
      deleteUrl={'/delete'}
      onUpload={(attachments) => setFiles([...files, ...attachments])}
      onDelete={(attachment) => setFiles(files.filter((file) => file.id !== attachment.id))}
      files={files}
    />
  );
};

export const Bokmål:StoryFn<FileInputProps> = (args) => {
  const [files, setFiles] = useState<Vedlegg[]>([]);
  return (
    <FileInput
      {...args}
      heading={'Annen dokumentasjon'}
      id={'filopplasting'}
      uploadUrl={'/upload'}
      deleteUrl={'/delete'}
      onUpload={(attachments) => setFiles([...files, ...attachments])}
      onDelete={(attachment) => setFiles(files.filter((file) => file.id !== attachment.id))}
      files={files}
    />
  );
}

export const Nynorsk:StoryFn<FileInputProps> = (args) => {
  const [files, setFiles] = useState<Vedlegg[]>([]);
  return (
    <FileInput
      {...args}
      heading={'Annen dokumentasjon'}
      id={'filopplasting'}
      uploadUrl={'/upload'}
      deleteUrl={'/delete'}
      onUpload={(attachments) => setFiles([...files, ...attachments])}
      onDelete={(attachment) => setFiles(files.filter((file) => file.id !== attachment.id))}
      files={files}
      locale={'nn'}
    />
  );
}