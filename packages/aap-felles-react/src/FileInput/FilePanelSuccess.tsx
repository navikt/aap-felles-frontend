import { CheckmarkIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Link, Panel } from '@navikt/ds-react';
import React from 'react';
import { Vedlegg } from './FileInput';

interface Props {
  file: Vedlegg;
  onDelete: () => void;
}

export const FilePanelSuccess = ({ file, onDelete }: Props) => {
  return (
    <Panel className={'fileCard'}>
      <div className={'fileCardLeftContent'}>
        <div className={'fileSuccess'}>
          <CheckmarkIcon color={'var(--a-icon-success)'} />
        </div>
        <div className={'fileInputText'}>
          <Link target={'_blank'} href={`/aap/soknad/vedlegg/${1}`}>
            {file.name}
          </Link>
          <Detail>{fileSizeString(file.size)}</Detail>
        </div>
      </div>
      <button
        onClick={onDelete}
        type={'button'}
        tabIndex={0}
        className={'deleteAttachment'}
        data-testid={'slett-knapp'}
      >
        <XMarkIcon title={'Slett'} />
        <BodyShort>{'Slett'}</BodyShort>
      </button>
    </Panel>
  );
};

function fileSizeString(size: number) {
  const kb = size / 1024;
  return kb > 1000 ? `${(kb / 1024).toFixed(1)} mB` : `${Math.floor(kb)} kB`;
}
