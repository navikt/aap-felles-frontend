import React from 'react';
import { FileInput } from './FileInput';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const fileOneName = 'filEn.pdf';
const fileTwoName = 'filTo.pdf';
const fileOne: File = new File(['fil en'], fileOneName, { type: 'pdf' });
const fileTwo: File = new File(['fil to'], fileTwoName, { type: 'pdf' });
const heading = 'Last opp fil';
const inputId = 'filopplastning';

describe('FileInput', () => {
  const user = userEvent.setup();

  it('Skal ha overskrift', () => {
    render(<FileInput heading={heading} inputId={inputId} />);
    expect(screen.getByText(heading)).toBeVisible();
  });

  it('Skal ha ingress hvis ingress har en verdi', () => {
    const ingress = 'Last opp minst tre filer';
    render(<FileInput heading={heading} ingress={ingress} inputId={inputId} />);
    expect(screen.getByText(ingress)).toBeVisible();
  });

  it('Skal ha heading i tittelen på opplastningsknapp', () => {
    render(<FileInput heading={heading} inputId={inputId} />);
    expect(screen.getByText(`Velg dine filer for ${heading.toLowerCase()}`)).toBeVisible();
  });

  it('Skal gå an å laste opp en fil', async () => {
    render(<FileInput heading={heading} name={'dokumenter'} inputId={inputId} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, fileOne);
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal gå an å laste opp flere filer av gangen', async () => {
    render(<FileInput heading={heading} name={'dokumenter'} inputId={inputId} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, [fileOne, fileTwo]);
    expect(await screen.findByText(fileOneName)).toBeVisible();
    expect(await screen.findByText(fileTwoName)).toBeVisible();
  });

  it('Skal gå an å laste opp en fil ved drag & drop', async () => {
    render(<FileInput heading={heading} name={'dokumenter'} inputId={inputId} />);
    const dropZone = screen.getByTestId('dropzone');
    fireEvent.drop(dropZone, { dataTransfer: { files: [fileOne] } });
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal gå an å laste opp flere filer ved drag & drop', async () => {
    render(<FileInput heading={heading} name={'dokumenter'} inputId={inputId} />);
    const dropZone = screen.getByTestId('dropzone');
    fireEvent.drop(dropZone, { dataTransfer: { files: [fileOne, fileTwo] } });
    expect(await screen.findByText(fileOneName)).toBeVisible();
    expect(await screen.findByText(fileTwoName)).toBeVisible();
  });
});
