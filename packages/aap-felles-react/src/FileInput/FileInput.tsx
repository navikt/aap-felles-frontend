import { BodyShort, Heading } from '@navikt/ds-react';
import React, { InputHTMLAttributes, useState } from 'react';
import { UploadIcon } from '@navikt/aksel-icons';

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  heading: string;
  inputid: string;
  ingress?: string;
}

export const FileInput = (props: FileInputProps) => {
  const { heading, inputid, ingress } = props;
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className={'fileInput'}>
      <Heading size={'medium'}>{heading}</Heading>
      {ingress && <BodyShort>{ingress}</BodyShort>}
      <div
        data-testid={'dropzone'}
        className={'dropzone'}
        onDrop={(dropEvent) => {
          if (dropEvent.dataTransfer.files) {
            const fileArray = Array.from(dropEvent.dataTransfer.files);
            setFiles([...files, ...fileArray]);
          }
        }}
      >
        <input
          {...props}
          data-testid={'fileinput'}
          type={'file'}
          id={inputid}
          multiple={true}
          className={'visuallyHidden'}
          onChange={(e) => {
            if (e.target.files) {
              const fileArray = Array.from(e.target.files);
              setFiles([...files, ...fileArray]);
            }
          }}
        />
        <BodyShort>{'Dra og slipp'}</BodyShort>
        <BodyShort>{'eller'}</BodyShort>
        <label htmlFor={inputid} aria-labelledby={inputid}>
          <span
            className={'fileInputButton navds-button navds-button__inner navds-body-short navds-button--secondary'}
            role={'button'}
            aria-controls={inputid}
            tabIndex={0}
          >
            <UploadIcon title="" aria-hidden />
            Velg dine filer for {heading.toLowerCase()}
          </span>
        </label>
      </div>
      {files.map((file, index) => (
        <span key={index}>{file.name}</span>
      ))}
    </div>
  );
};
