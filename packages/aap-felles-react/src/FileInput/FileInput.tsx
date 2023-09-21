import { BodyShort, Heading } from '@navikt/ds-react';
import React, { Dispatch, InputHTMLAttributes } from 'react';
import { UploadIcon } from '@navikt/aksel-icons';

/**
 *
 * Flytter onChange logikk ut av komponenten
 * Kjører internal error på filtype, størrelse,
 *
 *
 *
 */

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  heading: string;
  setFiles: Dispatch<Vedlegg[]>;
  files?: Vedlegg[];
  ingress?: string;
}

export interface Vedlegg extends File {
  errorMessage?: string;
}

const MAX_TOTAL_FILE_SIZE = 52428800; // 50mb
export const FileInput = (props: FileInputProps) => {
  const { heading, ingress, files = [], setFiles, ...rest } = props;

  function validate(fileToUpload: File): boolean {
    let vedlegg: Vedlegg;
    const totalUploadedBytes = files.reduce((acc, curr) => acc + curr.size, 0);

    if (!['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'].includes(fileToUpload?.type)) {
      vedlegg = Object.assign(fileToUpload, {
        errorMessage: 'Filtypen kan ikke lastes opp. Last opp dokumentet i et annet format (PDF, PNG, JPG eller heic).',
      });
      setFiles([...files, vedlegg]);
      return true;
    }

    if (totalUploadedBytes + fileToUpload?.size > MAX_TOTAL_FILE_SIZE) {
      vedlegg = Object.assign(fileToUpload, {
        errorMessage: 'Filen(e) du lastet opp er for stor. Last opp fil(er) med maksimal samlet størrelse 50 MB.',
      });
      setFiles([...files, vedlegg]);
      return true;
    }
    return false;
  }

  return (
    <div className={'fileInput'}>
      <Heading size={'medium'}>{heading}</Heading>
      {ingress && <BodyShort>{ingress}</BodyShort>}
      <div data-testid={'dropzone'} className={'dropzone'} onDrop={props.onDrop}>
        <input
          {...rest}
          onChange={(e) => {
            if (e.target.files) {
              Array.from(e.target.files).forEach((file) => {
                const hasError = validate(file);

                if (!hasError && props.onChange !== undefined) {
                  props.onChange(e);
                }
              });
            }
          }}
          data-testid={'fileinput'}
          type={'file'}
          id={props.id}
          multiple={true}
          className={'visuallyHidden'}
        />
        <BodyShort>{'Dra og slipp'}</BodyShort>
        <BodyShort>{'eller'}</BodyShort>
        <label htmlFor={props.id} aria-labelledby={props.id}>
          <span
            className={'fileInputButton navds-button navds-button__inner navds-body-short navds-button--secondary'}
            role={'button'}
            aria-controls={props.id}
            tabIndex={0}
          >
            <UploadIcon title="" aria-hidden />
            Velg dine filer for {heading.toLowerCase()}
          </span>
        </label>
      </div>
      {files?.map((file, index) => (
        <div key={index}>
          <span>{file.name}</span>
          <span>{file.errorMessage}</span>
        </div>
      ))}
    </div>
  );
};
