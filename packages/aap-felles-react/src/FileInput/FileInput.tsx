import { BodyShort, Heading } from '@navikt/ds-react';
import React, { Dispatch, InputHTMLAttributes, useMemo, useRef, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { UploadIcon } from '@navikt/aksel-icons';
import { FilePanelError } from './FilePanelError';
import { FilePanelSuccess } from './FilePanelSuccess';

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  heading: string;
  id: string;
  setFiles: Dispatch<Vedlegg[]>;
  uploadUrl: string;
  files?: Vedlegg[];
  ingress?: string;
}

export interface Vedlegg extends File {
  id: string;
  errorMessage?: string;
}

const MAX_TOTAL_FILE_SIZE = 52428800; // 50mb
export const FileInput = (props: FileInputProps) => {
  const { heading, ingress, files = [], setFiles, uploadUrl, id, ...rest } = props;
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputElement = useRef<HTMLInputElement>(null);
  const inputId = useMemo(() => uuidV4(), []);

  function internalValidate(fileToUpload: File): string | undefined {
    const totalUploadedSize = files.reduce((acc, curr) => acc + curr.size, 0);

    if (!['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'].includes(fileToUpload?.type)) {
      return 'Filtypen kan ikke lastes opp. Last opp dokumentet i et annet format (PDF, PNG, JPG eller heic).';
    }

    if (totalUploadedSize + fileToUpload?.size > MAX_TOTAL_FILE_SIZE) {
      return 'Filen(e) du lastet opp er for stor. Last opp fil(er) med maksimal samlet størrelse 50 MB.';
    }
  }

  async function validateAndSetFiles(filelist: FileList) {
    setIsUploading(true);
    const uploadedFiles: Vedlegg[] = await Promise.all(
      Array.from(filelist).map(async (file) => {
        const internalErrorMessage = internalValidate(file);
        let uploadResult = {
          id: uuidV4(),
          errorMessage: '',
        };

        if (!internalErrorMessage) {
          try {
            const data = new FormData();
            data.append('vedlegg', file);
            const res = await fetch(uploadUrl, { method: 'POST', body: data });
            const resData = await res.json();

            if (res.ok) {
              uploadResult.id = resData;
            } else {
              uploadResult.errorMessage = externalValidate(res.status, resData.substatus);
            }
          } catch (err: any) {
            uploadResult.errorMessage = externalValidate(err?.status || 500);
          }
        } else if (internalErrorMessage) {
          uploadResult.errorMessage = internalErrorMessage;
        }

        return Object.assign(file, uploadResult);
      })
    );

    setIsUploading(false);
    setFiles([...files, ...uploadedFiles]);
  }

  return (
    <div className={'fileInput'} id={props.id}>
      <Heading size={'medium'}>{heading}</Heading>
      {ingress && <BodyShort>{ingress}</BodyShort>}
      {files?.map((file) => {
        if (file.errorMessage) {
          return (
            <FilePanelError
              file={file}
              key={file.id}
              onDelete={() => {
                setFiles(files.filter((fileInMap) => fileInMap.id !== file.id));
              }}
            />
          );
        } else {
          return (
            <FilePanelSuccess
              file={file}
              key={file.id}
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
        {isUploading ? (
          // <Loader title={'Laster'} />
          <div>JEG LASTER</div>
        ) : (
          <>
            <input
              id={inputId}
              type={'file'}
              value={''}
              onChange={(e) => {
                if (e.target.files) {
                  validateAndSetFiles(e.target.files);
                }
              }}
              className={'visuallyHidden'}
              tabIndex={-1}
              data-testid={'fileinput'}
              multiple={true}
              accept="image/*,.pdf"
              ref={fileInputElement}
              {...rest}
            />
            <BodyShort>{'Dra og slipp'}</BodyShort>
            <BodyShort>{'eller'}</BodyShort>
            <label htmlFor={inputId} aria-labelledby={props.id}>
              <span
                className={'fileInputButton navds-button navds-button__inner navds-body-short navds-button--secondary'}
                role={'button'}
                aria-controls={inputId}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    fileInputElement?.current?.click();
                  }
                }}
              >
                <UploadIcon title="Last opp filer" aria-hidden />
                Velg dine filer for {heading.toLowerCase()}
              </span>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

function externalValidate(statusCode: number, substatus = '') {
  switch (statusCode) {
    case 422:
      return error422Text(substatus);
    case 413:
      return 'Filen(e) du lastet opp er for stor. Last opp fil(er) med maksimal samlet størrelse 50 MB.';
    case 415:
      return 'Filtypen kan ikke lastes opp. Last opp dokumentet i et annet format (PDF, PNG, JPG eller heic).';
    default:
      return 'Opplastingen feilet. Prøv på nytt';
  }
}
function error422Text(subType: string) {
  switch (subType) {
    case 'PASSWORD_PROTECTED':
      return 'Filen er passord-beskyttet og vil ikke kunne leses av en saksbehandler, fjern beskyttelsen og prøv igjen';
    case 'VIRUS':
      return 'Det er oppdaget virus på filen du prøver å laste opp. Velg en annen fil å laste opp.';
    case 'SIZE':
      return 'Maksimal samlet størrelse på vedlegg per bruker(50MB) er oversteget.';
    default:
      return '';
  }
}
