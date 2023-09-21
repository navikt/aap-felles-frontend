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
      files={files}
      onChange={(e) => {
        if (e.target.files) {
          const fileArray = Array.from(e.target.files);
          setFiles([...files, ...fileArray]);
        }
      }}
      setFiles={setFiles}
      onDrop={(e) => {
        if (e.dataTransfer.files) {
          const fileArray = Array.from(e.dataTransfer.files);
          setFiles([...files, ...fileArray]);
        }
      }}
    />
  );
};
