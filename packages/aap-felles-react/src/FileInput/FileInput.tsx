import { BodyShort, Heading } from '@navikt/ds-react';
import React, { Dispatch, InputHTMLAttributes, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { UploadIcon } from '@navikt/aksel-icons';
import { FilePanelError } from './FilePanelError';
import { FilePanelSuccess } from './FilePanelSuccess';

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  heading: string;
  setFiles: Dispatch<Vedlegg[]>;
  files?: Vedlegg[];
  ingress?: string;
}

export interface Vedlegg extends File {
  id: uuidV4;
  errorMessage?: string;
}

const MAX_TOTAL_FILE_SIZE = 52428800; // 50mb
export const FileInput = (props: FileInputProps) => {
  const { heading, ingress, files = [], setFiles, ...rest } = props;
  const [dragOver, setDragOver] = useState<boolean>(false);

  function validate(fileToUpload: File): string | undefined {
    const totalUploadedBytes = files.reduce((acc, curr) => acc + curr.size, 0);

    if (!['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'].includes(fileToUpload?.type)) {
      return 'Filtypen kan ikke lastes opp. Last opp dokumentet i et annet format (PDF, PNG, JPG eller heic).';
    }

    if (totalUploadedBytes + fileToUpload?.size > MAX_TOTAL_FILE_SIZE) {
      return 'Filen(e) du lastet opp er for stor. Last opp fil(er) med maksimal samlet størrelse 50 MB.';
    }
  }
  const validateAndSetFiles = (filelist: FileList) => {
    const filesToUpload = Array.from(filelist).map((file) => {
      const errorMessage = validate(file);

      return Object.assign(file, {
        id: uuidV4(),
        ...(errorMessage ? { errorMessage } : {}),
      });
    });
    setFiles([...files, ...filesToUpload]);
  };

  return (
    <div className={'fileInput'}>
      <Heading size={'medium'}>{heading}</Heading>
      {ingress && <BodyShort>{ingress}</BodyShort>}
      {files?.map((file, index) => {
        if (file.errorMessage) {
          return (
            <FilePanelError
              file={file}
              key={index}
              onDelete={() => {
                setFiles(files.filter((fileInMap) => fileInMap.id !== file.id));
              }}
            />
          );
        } else {
          return (
            <FilePanelSuccess
              file={file}
              key={index}
              onDelete={() => {
                setFiles(files.filter((fileInMap) => fileInMap.id !== file.id));
              }}
            />
          );
        }
      })}
      <div
        data-testid={'dropzone'}
        className={`dropzone ${dragOver ? 'dragover' : ''}`}
        onDragEnter={() => setDragOver(true)}
        onDragLeave={() => setDragOver(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          if (e.dataTransfer.files) {
            validateAndSetFiles(e.dataTransfer.files);
          }
        }}
      >
        <input
          {...rest}
          onChange={(e) => {
            if (e.target.files) {
              validateAndSetFiles(e.target.files);
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
    </div>
  );
};
