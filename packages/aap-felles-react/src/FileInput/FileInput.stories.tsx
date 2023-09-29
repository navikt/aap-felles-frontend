import { Meta, StoryFn } from '@storybook/react';

import { FileInput, FileInputProps, Attachment } from './FileInput';
import React, { useState } from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FileInput',
  component: FileInput,
} as Meta;

export const Primary: StoryFn<FileInputProps> = (args) => {
  const [files, setFiles] = useState<Attachment[]>([]);
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
