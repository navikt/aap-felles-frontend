"use strict";(self.webpackChunkaap_felles_frontend=self.webpackChunkaap_felles_frontend||[]).push([[435],{"./packages/aap-felles-react/src/FileInput/FileInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bokmål:()=>Bokmål,Nynorsk:()=>Nynorsk,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileInput_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),esm=__webpack_require__("./packages/aap-felles-react/node_modules/@navikt/ds-react/esm/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),react_esm=__webpack_require__("./packages/aap-felles-react/node_modules/@navikt/aksel-icons/dist/react/esm/index.js"),FilePanelError=__webpack_require__("./packages/aap-felles-react/src/FileInput/FilePanelError.tsx"),FilePanelSuccess=__webpack_require__("./packages/aap-felles-react/src/FileInput/FilePanelSuccess.tsx"),nb=__webpack_require__("./packages/aap-felles-react/src/FileInput/nb.ts"),nn=__webpack_require__("./packages/aap-felles-react/src/FileInput/nn.ts");const FileInput=props=>{const{heading,ingress,files,onUpload,onDelete,uploadUrl,deleteUrl,id,locale,readAttachmentUrl="nb",...rest}=props,[dragOver,setDragOver]=(0,react.useState)(!1),[isUploading,setIsUploading]=(0,react.useState)(!1),fileInputElement=(0,react.useRef)(null),inputId=(0,react.useMemo)((()=>(0,v4.A)()),[]),tekster=(0,react.useMemo)((()=>"nn"===locale?nn.A:nb.A),[locale]);const settFeilmelding=(statusCode,substatus="")=>{switch(statusCode){case 422:return function feilmeldingForSubstatus(substatus){switch(substatus){case"PASSWORD_PROTECTED":return tekster.fileInputErrors.passordbeskyttet;case"VIRUS":return tekster.fileInputErrors.virus;case"SIZE":return tekster.fileInputErrors.size;default:return""}}(substatus);case 413:return tekster.fileInputErrors.fileTooLarge;case 415:return tekster.fileInputErrors.unsupportedMediaType;default:return tekster.fileInputErrors.other}};async function validateAndSetFiles(filelist){setIsUploading(!0);const uploadedFiles=await Promise.all(Array.from(filelist).map((async file=>{const internalErrorMessage=function internalValidate(fileToUpload){const totalUploadedSize=files.reduce(((acc,curr)=>acc+curr.size),0);return["image/png","image/jpg","image/jpeg","application/pdf"].includes(null==fileToUpload?void 0:fileToUpload.type)?totalUploadedSize+(null==fileToUpload?void 0:fileToUpload.size)>52428800?tekster.fileInputErrors.fileTooLarge:void 0:tekster.fileInputErrors.unsupportedMediaType}(file);let uploadResult={vedleggId:(0,v4.A)(),errorMessage:"",type:file.type,size:file.size,name:file.name};if(internalErrorMessage)internalErrorMessage&&(uploadResult.errorMessage=internalErrorMessage);else try{const data=new FormData;data.append("vedlegg",file);const res=await fetch(uploadUrl,{method:"POST",body:data}),resData=await res.json();res.ok?uploadResult.vedleggId=resData:uploadResult.errorMessage=settFeilmelding(res.status,resData.substatus)}catch(err){uploadResult.errorMessage=settFeilmelding((null==err?void 0:err.status)||500)}return uploadResult})));setIsUploading(!1),onUpload(uploadedFiles)}return(0,jsx_runtime.jsxs)("div",{className:"fileInput",id:props.id,children:[(0,jsx_runtime.jsx)(esm.DZ,{size:"medium",children:heading}),ingress&&(0,jsx_runtime.jsx)(esm.hC,{children:ingress}),null==files?void 0:files.map((file=>file.errorMessage?(0,jsx_runtime.jsx)(FilePanelError.J,{file,onDelete:()=>onDelete(file)},file.vedleggId):(0,jsx_runtime.jsx)(FilePanelSuccess.M,{file,deleteUrl,readAttachmentUrl,onDelete:()=>{onDelete(file)}},file.vedleggId))),(0,jsx_runtime.jsx)("div",{"data-testid":"dropzone",className:"dropzone "+(dragOver?"dragover":""),onDragEnter:()=>setDragOver(!0),onDragLeave:()=>setDragOver(!1),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),e.dataTransfer.files&&validateAndSetFiles(e.dataTransfer.files),setDragOver(!1)},children:isUploading?(0,jsx_runtime.jsx)(esm.aH,{title:"Laster"}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{id:inputId,type:"file",value:"",onChange:e=>{e.target.files&&validateAndSetFiles(e.target.files)},className:"visuallyHidden",tabIndex:-1,"data-testid":"fileinput",multiple:!0,accept:"image/*,.pdf",ref:fileInputElement,...rest}),(0,jsx_runtime.jsx)(esm.hC,{children:tekster.inputText}),(0,jsx_runtime.jsx)(esm.hC,{children:"eller"}),(0,jsx_runtime.jsx)("label",{htmlFor:inputId,"aria-labelledby":props.id,children:(0,jsx_runtime.jsxs)("span",{className:"fileInputButton navds-button navds-button__inner navds-body-short navds-button--secondary",role:"button","aria-controls":inputId,tabIndex:0,onKeyDown:event=>{var _fileInputElement_current;"Enter"===event.key&&(null==fileInputElement||null===(_fileInputElement_current=fileInputElement.current)||void 0===_fileInputElement_current||_fileInputElement_current.click())},children:[(0,jsx_runtime.jsx)(react_esm.JMY,{title:"Last opp filer","aria-hidden":!0}),tekster.labelText," ",heading.toLowerCase()]})})]})})]})};FileInput.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{heading:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},onUpload:{required:!0,tsType:{name:"signature",type:"function",raw:"(attachments: Vedlegg[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Vedlegg"}],raw:"Vedlegg[]"},name:"attachments"}],return:{name:"void"}}},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"(attachment: Vedlegg) => void",signature:{arguments:[{type:{name:"Vedlegg"},name:"attachment"}],return:{name:"void"}}},description:""},deleteUrl:{required:!0,tsType:{name:"string"},description:""},uploadUrl:{required:!0,tsType:{name:"string"},description:""},readAttachmentUrl:{required:!0,tsType:{name:"string"},description:""},files:{required:!0,tsType:{name:"Array",elements:[{name:"Vedlegg"}],raw:"Vedlegg[]"},description:""},ingress:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:""}},composes:["InputHTMLAttributes"]};const FileInput_stories={title:"FileInput",component:FileInput},Primary=args=>{const[files,setFiles]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(FileInput,{...args,heading:"Annen dokumentasjon",id:"filopplasting",uploadUrl:"/upload",deleteUrl:"/delete",onUpload:attachments=>setFiles([...files,...attachments]),onDelete:attachment=>setFiles(files.filter((file=>file.vedleggId!==attachment.vedleggId))),files})},Bokmål=args=>{const[files,setFiles]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(FileInput,{...args,heading:"Annen dokumentasjon",id:"filopplasting",uploadUrl:"/upload",deleteUrl:"/delete",onUpload:attachments=>setFiles([...files,...attachments]),onDelete:attachment=>setFiles(files.filter((file=>file.vedleggId!==attachment.vedleggId))),files})},Nynorsk=args=>{const[files,setFiles]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(FileInput,{...args,heading:"Annen dokumentasjon",id:"filopplasting",uploadUrl:"/upload",deleteUrl:"/delete",onUpload:attachments=>setFiles([...files,...attachments]),onDelete:attachment=>setFiles(files.filter((file=>file.vedleggId!==attachment.vedleggId))),files,locale:"nn"})},__namedExportsOrder=["Primary","Bokmål","Nynorsk"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState<Vedlegg[]>([]);\n  return <FileInput {...args} heading={'Annen dokumentasjon'} id={'filopplasting'} uploadUrl={'/upload'} deleteUrl={'/delete'} onUpload={attachments => setFiles([...files, ...attachments])} onDelete={attachment => setFiles(files.filter(file => file.vedleggId !== attachment.vedleggId))} files={files} />;\n}",...Primary.parameters?.docs?.source}}},Bokmål.parameters={...Bokmål.parameters,docs:{...Bokmål.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState<Vedlegg[]>([]);\n  return <FileInput {...args} heading={'Annen dokumentasjon'} id={'filopplasting'} uploadUrl={'/upload'} deleteUrl={'/delete'} onUpload={attachments => setFiles([...files, ...attachments])} onDelete={attachment => setFiles(files.filter(file => file.vedleggId !== attachment.vedleggId))} files={files} />;\n}",...Bokmål.parameters?.docs?.source}}},Nynorsk.parameters={...Nynorsk.parameters,docs:{...Nynorsk.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState<Vedlegg[]>([]);\n  return <FileInput {...args} heading={'Annen dokumentasjon'} id={'filopplasting'} uploadUrl={'/upload'} deleteUrl={'/delete'} onUpload={attachments => setFiles([...files, ...attachments])} onDelete={attachment => setFiles(files.filter(file => file.vedleggId !== attachment.vedleggId))} files={files} locale={'nn'} />;\n}",...Nynorsk.parameters?.docs?.source}}}},"./packages/aap-felles-react/src/FileInput/FilePanelError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FilePanelError});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_navikt_ds_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/aap-felles-react/node_modules/@navikt/ds-react/esm/index.js"),_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/aap-felles-react/node_modules/@navikt/aksel-icons/dist/react/esm/index.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const FilePanelError=({file,onDelete})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_1__.Zk,{className:"fileCard error",tabIndex:0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fileCardLeftContent",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fileError",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_2__.dsF,{color:"var(--a-surface-danger-hover)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_1__.JU,{as:"span",children:file.name})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",onClick:onDelete,tabIndex:0,className:"deleteAttachment",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_2__.jre,{title:"Avbryt"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_1__.hC,{children:"Avbryt"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"navds-error-message navds-error-message--medium navds-label",children:file.errorMessage})]});FilePanelError.__docgenInfo={description:"",methods:[],displayName:"FilePanelError",props:{file:{required:!0,tsType:{name:"Vedlegg"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./packages/aap-felles-react/src/FileInput/FilePanelSuccess.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>FilePanelSuccess});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/aap-felles-react/node_modules/@navikt/aksel-icons/dist/react/esm/index.js"),_navikt_ds_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/aap-felles-react/node_modules/@navikt/ds-react/esm/index.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const FilePanelSuccess=({file,onDelete,deleteUrl,readAttachmentUrl})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_2__.Zk,{className:"fileCard",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fileCardLeftContent",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fileSuccess",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.Nrt,{color:"var(--a-icon-success)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fileInputText",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_2__.N_,{target:"_blank",href:`${readAttachmentUrl}${file.vedleggId}`,children:file.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_2__.kZ,{children:fileSizeString(file.size)})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{onClick:async()=>{(await fetch(`${deleteUrl}${file.vedleggId}`,{method:"DELETE"})).ok&&onDelete()},type:"button",tabIndex:0,className:"deleteAttachment","data-testid":"slett-knapp",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.fKY,{title:"Slett"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_2__.hC,{children:"Slett"})]})]});function fileSizeString(size){const kb=size/1024;return kb>1e3?`${(kb/1024).toFixed(1)} mB`:`${Math.floor(kb)} kB`}FilePanelSuccess.__docgenInfo={description:"",methods:[],displayName:"FilePanelSuccess",props:{file:{required:!0,tsType:{name:"Vedlegg"},description:""},deleteUrl:{required:!0,tsType:{name:"string"},description:""},readAttachmentUrl:{required:!0,tsType:{name:"string"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./packages/aap-felles-react/src/FileInput/nb.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={inputText:"Dra og slipp",labelText:"Velg dine filer for",fileInputErrors:{unsupportedMediaType:"Filtypen kan ikke lastes opp. Last opp dokumentet i et annet format (PDF, PNG, JPG eller heic). ",fileTooLarge:"Filen(e) du lastet opp er for stor. Last opp fil(er) med maksimal samlet størrelse 50 MB.",virus:"Det er oppdaget virus på filen du prøver å laste opp. Velg en annen fil å laste opp.",size:"Maksimal samlet størrelse på vedlegg per bruker (50MB) er oversteget.",default422:"Noe gikk galt i prosesseringen av filen. Prøv å laste opp dokumentet som PDF i stedet.",passordbeskyttet:"Filen er passord-beskyttet og vil ikke kunne leses av en saksbehandler, fjern beskyttelsen og prøv igjen",other:"Opplastingen feilet. Prøv på nytt"}}},"./packages/aap-felles-react/src/FileInput/nn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={inputText:"Dra og slepp",labelText:"Vel dine filar for",fileInputErrors:{unsupportedMediaType:"Filtypen er ikkje støtta. Last opp dokumentet i eit anna format (PDF, PNG, JPG eller heic).",fileTooLarge:"Éi eller fleire av filene du lasta opp, er større enn det som er tillate. Last opp éi eller fleire fil med ein samla storleik på maks 50 MB.",virus:"Det er oppdaga virus på fila du prøver å laste opp. Last opp ei anna fil.",size:"Maksimal samlet størrelse på vedlegg per bruker (50MB) er oversteget.",default422:"Noko gjekk gale i prosesseringa av fila. Prøv å lasta opp dokumentet som PDF i staden.",passordbeskyttet:"Fila er sikra med passord og vil ikkje vere mogleg for ein saksbehandlar å lese. Opphev passordsikringa og prøv igjen",other:"Opplastinga var mislukka. Prøv på nytt"}}},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)}}}]);