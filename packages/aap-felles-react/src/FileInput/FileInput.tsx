
import { BodyShort, Heading } from '@navikt/ds-react';
import React, { InputHTMLAttributes, useState } from 'react';


export interface Props  extends InputHTMLAttributes<HTMLInputElement>{
  heading: string;
  ingress?: string;
}

export const FileInput = (props : Props) =>{
   const {heading, ingress} = props; 
   const [files, setFiles] = useState<File[]>([]);
    
    return (
      <div>
        <Heading size={'medium'}>{heading}</Heading>
        {ingress && <BodyShort>{ingress}</BodyShort>}
        <div
            data-testid={'dropzone'}
            onDrop={(dropEvent) => {
                if(dropEvent.dataTransfer.files){
                    const fileArray = Array.from(dropEvent.dataTransfer.files);
                    setFiles([...files, ...fileArray])
                }
            }}
        >
            <label htmlFor={props.name} aria-labelledby={props.name}>Last opp</label>
            <input 
                {...props} 
                type={'file'} 
                id={props.name}
                multiple={true}
                onChange={(e) => {
                    if(e.target.files){
                        const fileArray = Array.from(e.target.files);
                        setFiles([...files, ...fileArray])
                    }
                }}
            />
        </div>
        {files.map((file, index) => <span key={index}>{file.name}</span>)}
      </div>
);

} 