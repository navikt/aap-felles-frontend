import React, { ReactElement, useState } from 'react';
import { FileInput, FileInputProps, Vedlegg } from './FileInput';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const fileOneName = 'filEn.pdf';
const fileTwoName = 'filTo.pdf';
const fileOne: File = new File(['fil en'], fileOneName, { type: 'application/pdf' });
const fileTwo: File = new File(['fil to'], fileTwoName, { type: 'application/pdf' });
const heading = 'Last opp fil';

describe('FileInput', () => {
  const user = userEvent.setup();

  it('Skal ha overskrift', () => {
    render(<FileInputWithState heading={heading} />);
    expect(screen.getByText(heading)).toBeVisible();
  });

  it('Skal ha ingress hvis ingress har en verdi', () => {
    const ingress = 'Last opp minst tre filer';
    render(<FileInputWithState heading={heading} ingress={ingress} />);
    expect(screen.getByText(ingress)).toBeVisible();
  });

  it('Skal ha heading i tittelen på opplastningsknapp', () => {
    render(<FileInputWithState heading={heading} />);
    expect(screen.getByText(`Velg dine filer for ${heading.toLowerCase()}`)).toBeVisible();
  });

  it('Skal gå an å laste opp en fil', async () => {
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, fileOne);
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal gå an å laste opp flere filer av gangen', async () => {
    render(<FileInputWithState heading={heading} name={'dokumenter'} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, [fileOne, fileTwo]);
    expect(await screen.findByText(fileOneName)).toBeVisible();
    expect(await screen.findByText(fileTwoName)).toBeVisible();
  });

  it('Skal gå an å laste opp en fil ved drag & drop', async () => {
    render(<FileInputWithState heading={heading} name={'dokumenter'} />);
    const dropZone = screen.getByTestId('dropzone');
    fireEvent.drop(dropZone, { dataTransfer: { files: [fileOne] } });
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal gå an å laste opp flere filer ved drag & drop', async () => {
    render(<FileInputWithState heading={heading} name={'dokumenter'} />);
    const dropZone = screen.getByTestId('dropzone');
    fireEvent.drop(dropZone, { dataTransfer: { files: [fileOne, fileTwo] } });
    expect(await screen.findByText(fileOneName)).toBeVisible();
    expect(await screen.findByText(fileTwoName)).toBeVisible();
  });

  it('Skal akseptere pdf', async () => {
    const pdfFile: File = new File(['fil en'], fileOneName, { type: 'application/pdf' });
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, pdfFile);
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal akseptere jpeg', async () => {
    const pdfFile: File = new File(['fil en'], fileOneName, { type: 'image/jpeg' });
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, pdfFile);
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal akseptere jpg', async () => {
    const pdfFile: File = new File(['fil en'], fileOneName, { type: 'image/jpg' });
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, pdfFile);
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal akseptere png', async () => {
    const pdfFile: File = new File(['fil en'], fileOneName, { type: 'image/png' });
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, pdfFile);
    expect(await screen.findByText(fileOneName)).toBeVisible();
  });

  it('Skal ikke akseptere JSON', async () => {
    const pdfFile: File = new File(['fil en'], fileOneName, { type: 'application/json' });
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, pdfFile);
    expect(
      await screen.findByText(
        'Filtypen kan ikke lastes opp. Last opp dokumentet i et annet format (PDF, PNG, JPG eller heic).'
      )
    ).toBeVisible();
  });

  it('Skal ikke akseptere flere filer når total fil størrelse er nådd ', async () => {
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, fileOne);
    await user.upload(input, fileTwo);

    const fileThree: File = new File(['fil tre'], 'filTre.pdf', { type: 'application/pdf' });
    Object.defineProperty(fileThree, 'size', { value: (1024 * 1024 + 1) * 50 });
    await user.upload(input, fileThree);

    expect(
      await screen.findByText(
        'Filen(e) du lastet opp er for stor. Last opp fil(er) med maksimal samlet størrelse 50 MB.'
      )
    );
  });

  it('Skal være mulig å fjerne en fil', async () => {
    render(<FileInputWithState heading={heading} />);
    const input = screen.getByTestId('fileinput');
    await user.upload(input, fileOne);

    expect(await screen.findByText(fileOneName)).toBeVisible();

    const slettKnapp = await screen.findByTestId('slett-knapp');
    await waitFor(() => slettKnapp.click());

    expect(await screen.queryByText(fileOneName)).not.toBeInTheDocument();
  });
});

export function FileInputWithState(props: Omit<FileInputProps, 'setFiles'>): ReactElement {
  const [files, setFiles] = useState<Vedlegg[]>([]);

  return <FileInput id={'filopplasting'} files={files} setFiles={setFiles} {...props} />;
}
