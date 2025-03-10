import { Meta, StoryFn } from '@storybook/react';

import { FileInputInnsending } from './FileInputInnsending';
import {  FileInputProps, Vedlegg } from './FileInput';
import React, { useState } from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FileInputInnsending',
  component: FileInputInnsending,
} as Meta;

export const Primary: StoryFn<FileInputProps> = (args) => {
  const [files, setFiles] = useState<Vedlegg[]>([]);
  return (
    <FileInputInnsending
      {...args}
      heading={'Annen dokumentasjon'}
      id={'filopplasting'}
      uploadUrl={'/upload'}
      deleteUrl={'/delete'}
      onUpload={(attachments) => setFiles([...files, ...attachments])}
      onDelete={(attachment) => setFiles(files.filter((file) => file.vedleggId !== attachment.vedleggId))}
      files={files}
    />
  );
};

