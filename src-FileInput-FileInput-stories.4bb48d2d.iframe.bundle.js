"use strict";(self.webpackChunkaap_felles_frontend=self.webpackChunkaap_felles_frontend||[]).push([[960],{"./packages/aap-felles-react/src/FileInput/FileInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bokmål:()=>Bokmål,Nynorsk:()=>Nynorsk,Primary:()=>Primary,default:()=>FileInput_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),Heading=__webpack_require__("./node_modules/@navikt/ds-react/esm/typography/Heading.js"),BodyShort=__webpack_require__("./node_modules/@navikt/ds-react/esm/typography/BodyShort.js"),Loader=__webpack_require__("./node_modules/@navikt/ds-react/esm/loader/Loader.js"),react=__webpack_require__("./node_modules/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),Upload=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/Upload.js"),Panel=__webpack_require__("./node_modules/@navikt/ds-react/esm/panel/Panel.js"),Label=__webpack_require__("./node_modules/@navikt/ds-react/esm/typography/Label.js"),FileText=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/FileText.js"),ArrowUndo=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/ArrowUndo.js"),__jsx=react.createElement,FilePanelError=function FilePanelError(_ref){var file=_ref.file,onDelete=_ref.onDelete;return __jsx(react.Fragment,null,__jsx(Panel.Z,{className:"fileCard error",tabIndex:0},__jsx("div",{className:"fileCardLeftContent"},__jsx("div",{className:"fileError"},__jsx(FileText.Z,{color:"var(--a-surface-danger-hover)"})),__jsx("div",null,__jsx(Label.Z,{as:"span"},file.name))),__jsx("button",{type:"button",onClick:onDelete,tabIndex:0,className:"deleteAttachment"},__jsx(ArrowUndo.Z,{title:"Avbryt"}),__jsx(BodyShort.Z,null,"Avbryt"))),__jsx("div",{className:"navds-error-message navds-error-message--medium navds-label"},file.errorMessage))};FilePanelError.__docgenInfo={description:"",methods:[],displayName:"FilePanelError",props:{file:{required:!0,tsType:{name:"Vedlegg"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{FilePanelError.displayName="FilePanelError",FilePanelError.__docgenInfo={description:"",displayName:"FilePanelError",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"Vedlegg"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/aap-felles-react/src/FileInput/FilePanelError.tsx#FilePanelError"]={docgenInfo:FilePanelError.__docgenInfo,name:"FilePanelError",path:"packages/aap-felles-react/src/FileInput/FilePanelError.tsx#FilePanelError"})}catch(__react_docgen_typescript_loader_error){}var Checkmark=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/Checkmark.js"),XMark=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/XMark.js"),Link=__webpack_require__("./node_modules/@navikt/ds-react/esm/link/Link.js"),Detail=__webpack_require__("./node_modules/@navikt/ds-react/esm/typography/Detail.js"),FilePanelSuccess_jsx=react.createElement,FilePanelSuccess=function FilePanelSuccess(_ref){var file=_ref.file,onDelete=_ref.onDelete,deleteUrl=_ref.deleteUrl;return FilePanelSuccess_jsx(Panel.Z,{className:"fileCard"},FilePanelSuccess_jsx("div",{className:"fileCardLeftContent"},FilePanelSuccess_jsx("div",{className:"fileSuccess"},FilePanelSuccess_jsx(Checkmark.Z,{color:"var(--a-icon-success)"})),FilePanelSuccess_jsx("div",{className:"fileInputText"},FilePanelSuccess_jsx(Link.Z,{target:"_blank",href:"/aap/soknad/vedlegg/".concat(1)},file.name),FilePanelSuccess_jsx(Detail.Z,null,function fileSizeString(size){var kb=size/1024;return kb>1e3?"".concat((kb/1024).toFixed(1)," mB"):"".concat(Math.floor(kb)," kB")}(file.size)))),FilePanelSuccess_jsx("button",{onClick:(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("".concat(deleteUrl).concat(file.id),{method:"DELETE"});case 2:_context.sent.ok&&onDelete();case 4:case"end":return _context.stop()}}),_callee)}))),type:"button",tabIndex:0,className:"deleteAttachment","data-testid":"slett-knapp"},FilePanelSuccess_jsx(XMark.Z,{title:"Slett"}),FilePanelSuccess_jsx(BodyShort.Z,null,"Slett")))};FilePanelSuccess.displayName="FilePanelSuccess",FilePanelSuccess.__docgenInfo={description:"",methods:[],displayName:"FilePanelSuccess",props:{file:{required:!0,tsType:{name:"Vedlegg"},description:""},deleteUrl:{required:!0,tsType:{name:"string"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{FilePanelSuccess.displayName="FilePanelSuccess",FilePanelSuccess.__docgenInfo={description:"",displayName:"FilePanelSuccess",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"Vedlegg"}},deleteUrl:{defaultValue:null,description:"",name:"deleteUrl",required:!0,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/aap-felles-react/src/FileInput/FilePanelSuccess.tsx#FilePanelSuccess"]={docgenInfo:FilePanelSuccess.__docgenInfo,name:"FilePanelSuccess",path:"packages/aap-felles-react/src/FileInput/FilePanelSuccess.tsx#FilePanelSuccess"})}catch(__react_docgen_typescript_loader_error){}const nb={fileInputErrors:{unsupportedMediaType:"Filtypen kan ikke lastes opp. Last opp dokumentet i et annet format (PDF, PNG, JPG eller heic). ",fileTooLarge:"Filen(e) du lastet opp er for stor. Last opp fil(er) med maksimal samlet størrelse 50 MB.",virus:"Det er oppdaget virus på filen du prøver å laste opp. Velg en annen fil å laste opp.",size:"Maksimal samlet størrelse på vedlegg per bruker(50MB) er oversteget.",passordbeskyttet:"Filen er passord-beskyttet og vil ikke kunne leses av en saksbehandler, fjern beskyttelsen og prøv igjen",other:"Opplastingen feilet. Prøv på nytt"}},nn={fileInputErrors:{unsupportedMediaType:"Filtypen er ikkje støtta. Last opp dokumentet i eit anna format (PDF, PNG, JPG eller heic).",fileTooLarge:"Éi eller fleire av filene du lasta opp, er større enn det som er tillate. Last opp éi eller fleire fil med ein samla storleik på maks 50 MB.",virus:"Det er oppdaga virus på fila du prøver å laste opp. Last opp ei anna fil.",size:"Maksimal samlet størrelse på vedlegg per bruker(50MB) er oversteget.",passordbeskyttet:"Fila er sikra med passord og vil ikkje vere mogleg for ein saksbehandlar å lese. Opphev passordsikringa og prøv igjen",other:"Opplastinga var mislukka. Prøv på nytt"}};var _Primary$parameters,_Primary$parameters2,_Bokmål$parameters,_Bokmål$parameters2,_Nynorsk$parameters,_Nynorsk$parameters2,_excluded=["heading","ingress","files","onUpload","onDelete","uploadUrl","deleteUrl","id","locale"],FileInput_jsx=react.createElement,FileInput=function FileInput(props){var _validateAndSetFiles,heading=props.heading,ingress=props.ingress,files=props.files,onUpload=props.onUpload,_onDelete=props.onDelete,uploadUrl=props.uploadUrl,deleteUrl=props.deleteUrl,_props$locale=(props.id,props.locale),locale=void 0===_props$locale?"nb":_props$locale,rest=(0,objectWithoutProperties.Z)(props,_excluded),_useState=(0,react.useState)(!1),dragOver=_useState[0],setDragOver=_useState[1],_useState2=(0,react.useState)(!1),isUploading=_useState2[0],setIsUploading=_useState2[1],fileInputElement=(0,react.useRef)(null),inputId=(0,react.useMemo)((function(){return(0,v4.Z)()}),[]),tekster=(0,react.useMemo)((function(){return"nn"===locale?nn:nb}),[locale]);var settFeilmelding=function settFeilmelding(statusCode){var substatus=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(statusCode){case 422:return function feilmeldingForSubstatus(substatus){switch(substatus){case"PASSWORD_PROTECTED":return tekster.fileInputErrors.passordbeskyttet;case"VIRUS":return tekster.fileInputErrors.virus;case"SIZE":return tekster.fileInputErrors.size;default:return""}}(substatus);case 413:return tekster.fileInputErrors.fileTooLarge;case 415:return tekster.fileInputErrors.unsupportedMediaType;default:return tekster.fileInputErrors.other}};function validateAndSetFiles(_x){return(_validateAndSetFiles=_validateAndSetFiles||(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(filelist){var _ref,uploadedFiles;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return setIsUploading(!0),_context2.next=3,Promise.all(Array.from(filelist).map((function(_x2){return(_ref=_ref||(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(file){var internalErrorMessage,uploadResult,data,res,resData;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(fileToUpload=file,totalUploadedSize=void 0,totalUploadedSize=files.reduce((function(acc,curr){return acc+curr.size}),0),internalErrorMessage=["image/png","image/jpg","image/jpeg","application/pdf"].includes(null==fileToUpload?void 0:fileToUpload.type)?totalUploadedSize+(null==fileToUpload?void 0:fileToUpload.size)>52428800?tekster.fileInputErrors.fileTooLarge:void 0:tekster.fileInputErrors.unsupportedMediaType,uploadResult={id:(0,v4.Z)(),errorMessage:"",type:file.type,size:file.size,name:file.name},internalErrorMessage){_context.next=20;break}return _context.prev=3,(data=new FormData).append("vedlegg",file),_context.next=8,fetch(uploadUrl,{method:"POST",body:data});case 8:return res=_context.sent,_context.next=11,res.json();case 11:resData=_context.sent,res.ok?uploadResult.id=resData:uploadResult.errorMessage=settFeilmelding(res.status,resData.substatus),_context.next=18;break;case 15:_context.prev=15,_context.t0=_context.catch(3),uploadResult.errorMessage=settFeilmelding((null===_context.t0||void 0===_context.t0?void 0:_context.t0.status)||500);case 18:_context.next=21;break;case 20:internalErrorMessage&&(uploadResult.errorMessage=internalErrorMessage);case 21:return _context.abrupt("return",uploadResult);case 22:case"end":return _context.stop()}var fileToUpload,totalUploadedSize}),_callee,null,[[3,15]])})))).apply(this,arguments)})));case 3:uploadedFiles=_context2.sent,setIsUploading(!1),onUpload(uploadedFiles);case 6:case"end":return _context2.stop()}}),_callee2)})))).apply(this,arguments)}return FileInput_jsx("div",{className:"fileInput",id:props.id},FileInput_jsx(Heading.Z,{size:"medium"},heading),ingress&&FileInput_jsx(BodyShort.Z,null,ingress),null==files?void 0:files.map((function(file){return file.errorMessage?FileInput_jsx(FilePanelError,{file,key:file.id,onDelete:function onDelete(){return _onDelete(file)}}):FileInput_jsx(FilePanelSuccess,{file,key:file.id,deleteUrl,onDelete:function onDelete(){_onDelete(file)}})})),FileInput_jsx("div",{"data-testid":"dropzone",className:"dropzone ".concat(dragOver?"dragover":""),onDragEnter:function onDragEnter(){return setDragOver(!0)},onDragLeave:function onDragLeave(){return setDragOver(!1)},onDragOver:function onDragOver(e){return e.preventDefault()},onDrop:function onDrop(e){e.preventDefault(),e.dataTransfer.files&&validateAndSetFiles(e.dataTransfer.files),setDragOver(!1)}},isUploading?FileInput_jsx(Loader.Z,{title:"Laster"}):FileInput_jsx(react.Fragment,null,FileInput_jsx("input",(0,esm_extends.Z)({id:inputId,type:"file",value:"",onChange:function onChange(e){e.target.files&&validateAndSetFiles(e.target.files)},className:"visuallyHidden",tabIndex:-1,"data-testid":"fileinput",multiple:!0,accept:"image/*,.pdf",ref:fileInputElement},rest)),FileInput_jsx(BodyShort.Z,null,"Dra og slipp"),FileInput_jsx(BodyShort.Z,null,"eller"),FileInput_jsx("label",{htmlFor:inputId,"aria-labelledby":props.id},FileInput_jsx("span",{className:"fileInputButton navds-button navds-button__inner navds-body-short navds-button--secondary",role:"button","aria-controls":inputId,tabIndex:0,onKeyDown:function onKeyDown(event){var _fileInputElement$cur;"Enter"===event.key&&(null==fileInputElement||null===(_fileInputElement$cur=fileInputElement.current)||void 0===_fileInputElement$cur||_fileInputElement$cur.click())}},FileInput_jsx(Upload.Z,{title:"Last opp filer","aria-hidden":!0}),"Velg dine filer for ",heading.toLowerCase())))))};FileInput.displayName="FileInput",FileInput.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{heading:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},onUpload:{required:!0,tsType:{name:"signature",type:"function",raw:"(attachments: Vedlegg[]) => void",signature:{arguments:[{name:"attachments",type:{name:"Array",elements:[{name:"Vedlegg"}],raw:"Vedlegg[]"}}],return:{name:"void"}}},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"(attachment: Vedlegg) => void",signature:{arguments:[{name:"attachment",type:{name:"Vedlegg"}}],return:{name:"void"}}},description:""},deleteUrl:{required:!0,tsType:{name:"string"},description:""},uploadUrl:{required:!0,tsType:{name:"string"},description:""},files:{required:!0,tsType:{name:"Array",elements:[{name:"Vedlegg"}],raw:"Vedlegg[]"},description:""},ingress:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:""}},composes:["InputHTMLAttributes"]};try{FileInput.displayName="FileInput",FileInput.__docgenInfo={description:"",displayName:"FileInput",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!0,type:{name:"(attachments: Vedlegg[]) => void"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(attachment: Vedlegg) => void"}},deleteUrl:{defaultValue:null,description:"",name:"deleteUrl",required:!0,type:{name:"string"}},uploadUrl:{defaultValue:null,description:"",name:"uploadUrl",required:!0,type:{name:"string"}},files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"Vedlegg[]"}},ingress:{defaultValue:null,description:"",name:"ingress",required:!1,type:{name:"string"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/aap-felles-react/src/FileInput/FileInput.tsx#FileInput"]={docgenInfo:FileInput.__docgenInfo,name:"FileInput",path:"packages/aap-felles-react/src/FileInput/FileInput.tsx#FileInput"})}catch(__react_docgen_typescript_loader_error){}var FileInput_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const FileInput_stories={title:"FileInput",component:FileInput};var Primary=function Primary(args){var _useState=(0,react.useState)([]),files=_useState[0],setFiles=_useState[1];return FileInput_stories_jsx(FileInput,(0,esm_extends.Z)({},args,{heading:"Annen dokumentasjon",id:"filopplasting",uploadUrl:"/upload",deleteUrl:"/delete",onUpload:function onUpload(attachments){return setFiles([].concat((0,toConsumableArray.Z)(files),(0,toConsumableArray.Z)(attachments)))},onDelete:function onDelete(attachment){return setFiles(files.filter((function(file){return file.id!==attachment.id})))},files}))};Primary.displayName="Primary";var Bokmål=function Bokmål(args){var _useState2=(0,react.useState)([]),files=_useState2[0],setFiles=_useState2[1];return FileInput_stories_jsx(FileInput,(0,esm_extends.Z)({},args,{heading:"Annen dokumentasjon",id:"filopplasting",uploadUrl:"/upload",deleteUrl:"/delete",onUpload:function onUpload(attachments){return setFiles([].concat((0,toConsumableArray.Z)(files),(0,toConsumableArray.Z)(attachments)))},onDelete:function onDelete(attachment){return setFiles(files.filter((function(file){return file.id!==attachment.id})))},files}))};Bokmål.displayName="Bokmål";var Nynorsk=function Nynorsk(args){var _useState3=(0,react.useState)([]),files=_useState3[0],setFiles=_useState3[1];return FileInput_stories_jsx(FileInput,(0,esm_extends.Z)({},args,{heading:"Annen dokumentasjon",id:"filopplasting",uploadUrl:"/upload",deleteUrl:"/delete",onUpload:function onUpload(attachments){return setFiles([].concat((0,toConsumableArray.Z)(files),(0,toConsumableArray.Z)(attachments)))},onDelete:function onDelete(attachment){return setFiles(files.filter((function(file){return file.id!==attachment.id})))},files,locale:"nn"}))};Nynorsk.displayName="Nynorsk",Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  const [files, setFiles] = useState<Vedlegg[]>([]);\n  return <FileInput {...args} heading={'Annen dokumentasjon'} id={'filopplasting'} uploadUrl={'/upload'} deleteUrl={'/delete'} onUpload={attachments => setFiles([...files, ...attachments])} onDelete={attachment => setFiles(files.filter(file => file.id !== attachment.id))} files={files} />;\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Bokmål.parameters=_objectSpread(_objectSpread({},Bokmål.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Bokmål$parameters=Bokmål.parameters)||void 0===_Bokmål$parameters?void 0:_Bokmål$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  const [files, setFiles] = useState<Vedlegg[]>([]);\n  return <FileInput {...args} heading={'Annen dokumentasjon'} id={'filopplasting'} uploadUrl={'/upload'} deleteUrl={'/delete'} onUpload={attachments => setFiles([...files, ...attachments])} onDelete={attachment => setFiles(files.filter(file => file.id !== attachment.id))} files={files} />;\n}"},null===(_Bokmål$parameters2=Bokmål.parameters)||void 0===_Bokmål$parameters2||null===(_Bokmål$parameters2=_Bokmål$parameters2.docs)||void 0===_Bokmål$parameters2?void 0:_Bokmål$parameters2.source)})}),Nynorsk.parameters=_objectSpread(_objectSpread({},Nynorsk.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Nynorsk$parameters=Nynorsk.parameters)||void 0===_Nynorsk$parameters?void 0:_Nynorsk$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  const [files, setFiles] = useState<Vedlegg[]>([]);\n  return <FileInput {...args} heading={'Annen dokumentasjon'} id={'filopplasting'} uploadUrl={'/upload'} deleteUrl={'/delete'} onUpload={attachments => setFiles([...files, ...attachments])} onDelete={attachment => setFiles(files.filter(file => file.id !== attachment.id))} files={files} locale={'nn'} />;\n}"},null===(_Nynorsk$parameters2=Nynorsk.parameters)||void 0===_Nynorsk$parameters2||null===(_Nynorsk$parameters2=_Nynorsk$parameters2.docs)||void 0===_Nynorsk$parameters2?void 0:_Nynorsk$parameters2.source)})}),Primary.__docgenInfo={description:"",methods:[],displayName:"Primary"},Bokmål.__docgenInfo={description:"",methods:[],displayName:"Bokmål"},Nynorsk.__docgenInfo={description:"",methods:[],displayName:"Nynorsk"}}}]);