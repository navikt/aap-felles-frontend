import React from "react";
import { FileInput } from "./FileInput";
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const fileOneName = 'filEn.pdf';
const fileTwoName = 'filTo.pdf';
const fileOne: File = new File(['fil en'], fileOneName, {type: 'pdf'});
const fileTwo: File = new File(['fil to'], fileTwoName, {type: 'pdf'});

describe('FileInput', () => {
    const user = userEvent.setup();
    const heading = 'Last opp fil';
    it('Skal ha overskrift', () =>{
    render(<FileInput heading={heading} />);
      expect(screen.getByText(heading)).toBeVisible();
    })

    it('Skal ha ingress hvis ingress har en verdi', () =>{
    const ingress = 'Last opp minst tre filer';
    render(<FileInput heading={heading} ingress={ingress}/>);
      expect(screen.getByText(ingress)).toBeVisible();
    })

    it('Skal gå an å laste opp en fil', async () =>{
        render(<FileInput heading={heading} name={'dokumenter'} />);
        const input = screen.getByLabelText('Last opp');
        await user.upload(input, fileOne);
        expect( await screen.findByText(fileOneName)).toBeVisible();
    })

    it('Skal gå an å laste opp flere filer av gangen', async () =>{
        render(<FileInput heading={heading} name={'dokumenter'} />);
        const input = screen.getByLabelText('Last opp');
        await user.upload(input, [fileOne, fileTwo]);
        expect( await screen.findByText(fileOneName)).toBeVisible();
        expect( await screen.findByText(fileTwoName)).toBeVisible();
    })

    it('Skal gå an å laste opp en fil ved drag & drop', async () =>{
        render(<FileInput heading={heading} name={'dokumenter'} />);
        const dropZone = screen.getByTestId('dropzone');
        fireEvent.drop(dropZone, {dataTransfer: { files: [fileOne]}});
        expect( await screen.findByText(fileOneName)).toBeVisible();
    })

    it('Skal gå an å laste opp flere filer ved drag & drop', async () =>{
        render(<FileInput heading={heading} name={'dokumenter'} />);
        const dropZone = screen.getByTestId('dropzone');
        fireEvent.drop(dropZone, {dataTransfer: { files: [fileOne, fileTwo]}});
        expect( await screen.findByText(fileOneName)).toBeVisible();
        expect( await screen.findByText(fileTwoName)).toBeVisible();
    })
})