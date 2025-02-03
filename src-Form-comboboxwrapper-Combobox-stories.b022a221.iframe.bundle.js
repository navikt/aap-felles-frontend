"use strict";(self.webpackChunkaap_felles_frontend=self.webpackChunkaap_felles_frontend||[]).push([[345],{"./packages/aap-felles-react/src/Form/comboboxwrapper/Combobox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComboboxForm:()=>ComboboxForm,MultipleComboboxForm:()=>MultipleComboboxForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Combobox_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),esm=__webpack_require__("./node_modules/@navikt/ds-react/esm/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");function useConfigForm(config,rfhConfig){const defaultValues={},formFields={};Object.entries(config).forEach((([id,formFieldConfig])=>{["fieldArray","async_combobox"].includes(formFieldConfig.type)||(formFields[id]={...formFieldConfig,name:id,readOnly:null==rfhConfig?void 0:rfhConfig.readOnly}),formFieldConfig.defaultValue&&(defaultValues[id]=formFieldConfig.defaultValue)}));const form=(0,index_esm.mN)({...rfhConfig,defaultValues});return{formFields,form}}__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const TextFieldWrapper=({name,label,hideLabel,control,type,description,size="small",rules,readOnly,className,autocomplete})=>(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{name,value,onChange},fieldState:{error}})=>(0,jsx_runtime.jsx)(esm.A_,{id:name,name,size,label,type,error:null==error?void 0:error.message,hideLabel,value:value||"",onChange,description,readOnly,className,autoComplete:autocomplete})});TextFieldWrapper.__docgenInfo={description:"",methods:[],displayName:"TextFieldWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},type:{required:!0,tsType:{name:"union",raw:"'text' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},autocomplete:{required:!1,tsType:{name:"HTMLInputAutoCompleteAttribute"},description:""}}};const TextAreaWrapper=({name,description,label,control,size="small",maxLength,hideLabel,rules,readOnly,className,autocomplete})=>(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{name,value,onChange},fieldState:{error}})=>(0,jsx_runtime.jsx)(esm.TM,{id:name,label,size,description,value,onChange,hideLabel,error:null==error?void 0:error.message,name,maxLength,readOnly,className,autoComplete:autocomplete})});TextAreaWrapper.__docgenInfo={description:"",methods:[],displayName:"TextAreaWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},autocomplete:{required:!1,tsType:{name:"HTMLInputAutoCompleteAttribute"},description:""}}};var subYears=__webpack_require__("./node_modules/date-fns/subYears.mjs"),addYears=__webpack_require__("./node_modules/date-fns/addYears.mjs");const FRA_DATO=(0,subYears.d)(new Date,80),TIL_DATO=(0,addYears.e)(new Date,80),DateWrapper=({name,label,description,control,rules,disableWeekend=!1,size="small",hideLabel,fromDate=FRA_DATO,toDate=TIL_DATO,selected,readOnly,strategy})=>{const{datepickerProps,inputProps}=(0,esm.IU)({defaultSelected:selected});return(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{name,value,onChange},fieldState:{error}})=>(0,jsx_runtime.jsx)(esm.lr,{id:name,onChange,onSelect:onChange,...datepickerProps,disableWeekends:disableWeekend,dropdownCaption:!0,fromDate,toDate,strategy,children:(0,jsx_runtime.jsx)(esm.lr.Input,{onChange,onInput:onChange,size,value,name,hideLabel,description,error:error&&error.message,label,readOnly,...inputProps})})})};DateWrapper.__docgenInfo={description:"",methods:[],displayName:"DateWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disableWeekend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},fromDate:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"subYears(new Date(), 80)",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},toDate:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"addYears(new Date(), 80)",computed:!0}},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"Date"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:""}}};const SelectWrapper=({name,label,control,rules,size="small",description,hideLabel,children,readOnly,className,autocomplete})=>(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{name,value,onChange},fieldState:{error}})=>(0,jsx_runtime.jsx)(esm.l6,{id:name,name,size,label,description,value,hideLabel,onChange,error:null==error?void 0:error.message,readOnly,className,autoComplete:autocomplete,children})});SelectWrapper.__docgenInfo={description:"",methods:[],displayName:"SelectWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},label:{required:!1,tsType:{name:"string"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},description:{required:!1,tsType:{name:"ReactNode"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},autocomplete:{required:!1,tsType:{name:"HTMLInputAutoCompleteAttribute"},description:""}}};const CheckboxWrapper=({name,label,control,rules,children,size="small",description,hideLabel,readOnly,className})=>(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{onChange,value},fieldState:{error}})=>(0,jsx_runtime.jsx)(esm.$Q,{size,id:name,name,legend:label,hideLegend:hideLabel,description,error:null==error?void 0:error.message,value:value||[],onChange,readOnly,className,children})});CheckboxWrapper.__docgenInfo={description:"",methods:[],displayName:"CheckboxWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const RadioGroupWrapper=({children,name,control,rules,description,hideLabel,label,size="small",horisontal=!1,readOnly,className})=>{const classNames=`${className} ${horisontal?"radiowrapper_horizontal":""}`;return(0,jsx_runtime.jsx)("div",{className:"radiowrapper_radiogroup",children:(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{onChange,value},fieldState:{error}})=>(0,jsx_runtime.jsx)(esm.z6,{id:name,size,value:value||"",hideLegend:hideLabel,name,legend:label,error:null==error?void 0:error.message,onChange,description,className:classNames,readOnly,children})})})};RadioGroupWrapper.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},horisontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ComboboxWrapper=({name,label,control,hideLabel,size="small",rules,description,readOnly,options,className})=>(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{onChange,value},fieldState:{error}})=>{var _options_find,_options_find_label;return(0,jsx_runtime.jsx)(esm.b4,{shouldAutocomplete:!1,size,id:name,name,label,hideLabel,description,error:null==error?void 0:error.message,options,onToggleSelected:onChange,selectedOptions:[null!==(_options_find_label=null===(_options_find=options.find((option=>option.value===value)))||void 0===_options_find?void 0:_options_find.label)&&void 0!==_options_find_label?_options_find_label:""],readOnly,className})}});ComboboxWrapper.__docgenInfo={description:"",methods:[],displayName:"ComboboxWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ValuePair"}],raw:"ValuePair[]"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const MultipleComboboxWrapper=({name,label,control,rules,description,hideLabel,size="small",readOnly,options,className})=>(0,jsx_runtime.jsx)(index_esm.xI,{control,rules,name,render:({field,fieldState})=>{var _fieldState_error,_field_value;return(0,jsx_runtime.jsx)(esm.b4,{id:name,label,options,isMultiSelect:!0,hideLabel,description,error:null===(_fieldState_error=fieldState.error)||void 0===_fieldState_error?void 0:_fieldState_error.message,readOnly,className,selectedOptions:null===(_field_value=field.value)||void 0===_field_value?void 0:_field_value.map((value=>{const option=options.find((option=>option.value===value));if(option)return option.label})),ref:field.ref,name:field.name,size,onBlur:field.onBlur,onToggleSelected:(option,isSelected)=>{isSelected?field.onChange([...field.value||[],option]):field.onChange(field.value.filter((v=>v!==option)))}})}});MultipleComboboxWrapper.__docgenInfo={description:"",methods:[],displayName:"MultipleComboboxWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ValuePair"}],raw:"ValuePair[]"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isMultiSelect:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const DateInputWrapper=({name,label,control,description,rules,readOnly,size="small",className,hideLabel,autocomplete})=>{const classNames=`aap_date_input ${className}`,transform=input=>(input=>{if(!/^\d+$/.test(input)||6!==input.length)return input;const date=input.substring(0,2),month=input.substring(2,4),year=Number.parseInt(input.substring(4),10);return`${date}.${month}.${year>((new Date).getFullYear()-90)%100?1900+year:2e3+year}`})(input.currentTarget.value);return(0,jsx_runtime.jsx)(index_esm.xI,{name,control,rules,render:({field:{name,value,onChange},fieldState:{error}})=>(0,jsx_runtime.jsx)(esm.A_,{id:name,name,size,label,hideLabel,type:"text",error:null==error?void 0:error.message,value:value||"",onChange:value=>onChange(transform(value)),description,readOnly,className:classNames,autoComplete:autocomplete})})};DateInputWrapper.__docgenInfo={description:"",methods:[],displayName:"DateInputWrapper",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"FormFieldValues"}],raw:"FieldPath<FormFieldValues>"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FormFieldValues"}],raw:"Control<FormFieldValues>"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},description:{required:!1,tsType:{name:"ReactNode"},description:""},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"FormFieldValues"}],raw:"RegisterOptions<FormFieldValues>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},autocomplete:{required:!1,tsType:{name:"HTMLInputAutoCompleteAttribute"},description:""}}};const FormField=props=>{const{formField,form,children,className,horizontalRadio,size,autocomplete="off"}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[("text"===formField.type||"number"===formField.type)&&(0,jsx_runtime.jsx)(TextFieldWrapper,{name:formField.name,label:formField.label,type:formField.type,control:form.control,rules:formField.rules,size,hideLabel:formField.hideLabel,description:formField.description,readOnly:formField.readOnly,className,autocomplete}),"textarea"===formField.type&&(0,jsx_runtime.jsx)(TextAreaWrapper,{name:formField.name,label:formField.label,control:form.control,rules:formField.rules,size,hideLabel:formField.hideLabel,description:formField.description,readOnly:formField.readOnly,className,autocomplete}),"radio"===formField.type&&(0,jsx_runtime.jsx)(RadioGroupWrapper,{name:formField.name,control:form.control,label:formField.label,hideLabel:formField.hideLabel,description:formField.description,rules:formField.rules,size,horisontal:horizontalRadio,readOnly:formField.readOnly,children:formField.options.map(mapToValuePair).map((option=>(0,jsx_runtime.jsx)(esm.sx,{value:option.value,children:option.label},option.value)))}),"date"===formField.type&&(0,jsx_runtime.jsx)(DateWrapper,{name:formField.name,label:formField.label,control:form.control,rules:formField.rules,size,hideLabel:formField.hideLabel,description:formField.description,fromDate:formField.fromDate,toDate:formField.toDate,disableWeekend:formField.disableWeekends,selected:form.getValues(formField.name),readOnly:formField.readOnly,strategy:formField.strategy}),"date_input"===formField.type&&(0,jsx_runtime.jsx)(DateInputWrapper,{name:formField.name,label:formField.label,control:form.control,rules:formField.rules,size,hideLabel:formField.hideLabel,description:formField.description,readOnly:formField.readOnly,className,autocomplete}),"checkbox"===formField.type&&(0,jsx_runtime.jsx)(CheckboxWrapper,{name:formField.name,label:formField.label,hideLabel:formField.hideLabel,control:form.control,rules:formField.rules,size,description:formField.description,readOnly:formField.readOnly,className,children:formField.options.map(mapToValuePair).map((option=>(0,jsx_runtime.jsx)(esm.Sc,{value:option.value,children:option.label},option.value)))}),"select"===formField.type&&(0,jsx_runtime.jsx)(SelectWrapper,{name:formField.name,label:formField.label,description:formField.description,hideLabel:formField.hideLabel,control:form.control,rules:formField.rules,size,readOnly:formField.readOnly,className,autocomplete,children:formField.options.map(mapToValuePair).map((option=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.label},option.value)))}),"checkbox_nested"===formField.type&&(0,jsx_runtime.jsx)(CheckboxWrapper,{name:formField.name,label:formField.label,hideLabel:formField.hideLabel,description:formField.description,control:form.control,rules:formField.rules,size,readOnly:formField.readOnly,className,children}),"radio_nested"===formField.type&&(0,jsx_runtime.jsx)(RadioGroupWrapper,{name:formField.name,label:formField.label,description:formField.description,control:form.control,rules:formField.rules,size,hideLabel:formField.hideLabel,readOnly:formField.readOnly,className,children}),"combobox"===formField.type&&(0,jsx_runtime.jsx)(ComboboxWrapper,{name:formField.name,label:formField.label,control:form.control,hideLabel:formField.hideLabel,rules:formField.rules,size,description:formField.description,readOnly:formField.readOnly,options:formField.options.map((option=>mapToValuePair(option)))}),"combobox_multiple"===formField.type&&(0,jsx_runtime.jsx)(MultipleComboboxWrapper,{name:formField.name,label:formField.label,control:form.control,hideLabel:formField.hideLabel,rules:formField.rules,size,description:formField.description,readOnly:formField.readOnly,options:formField.options.map((option=>mapToValuePair(option)))})]})};function mapToValuePair(option){return"string"==typeof option?{label:option,value:option}:option}FormField.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{form:{required:!0,tsType:{name:"UseFormReturn",elements:[{name:"FormFieldIds"}],raw:"UseFormReturn<FormFieldIds>"},description:""},formField:{required:!0,tsType:{name:"intersection",raw:"FormFieldConfig<FormFieldIds> &\nFormFieldName<FormFieldIds>",elements:[{name:"union",raw:"| FormFieldText<FormFieldIds>\n| FormFieldDate<FormFieldIds>\n| FormFieldDateInput<FormFieldIds>\n| FormFieldWithOptions<FormFieldIds>\n| FormFieldSelect<FormFieldIds>\n| FormFieldCheckbox<FormFieldIds>\n| FormFieldCombobox<FormFieldIds>\n| FormFieldMultipleCombobox<FormFieldIds>\n| FormFieldRadioWithNestedOptions<FormFieldIds>\n| FormFieldCheckboxWithNestedOptions<FormFieldIds>\n| FormFieldAsyncCombobox<FormFieldIds>\n| FormFieldArray<keyof FormFieldIds, FormFieldIds>",elements:[{name:"FormFieldText",elements:[{name:"FormFieldIds"}],raw:"FormFieldText<FormFieldIds>"},{name:"FormFieldDate",elements:[{name:"FormFieldIds"}],raw:"FormFieldDate<FormFieldIds>"},{name:"FormFieldDateInput",elements:[{name:"FormFieldIds"}],raw:"FormFieldDateInput<FormFieldIds>"},{name:"FormFieldWithOptions",elements:[{name:"FormFieldIds"}],raw:"FormFieldWithOptions<FormFieldIds>"},{name:"FormFieldSelect",elements:[{name:"FormFieldIds"}],raw:"FormFieldSelect<FormFieldIds>"},{name:"FormFieldCheckbox",elements:[{name:"FormFieldIds"}],raw:"FormFieldCheckbox<FormFieldIds>"},{name:"FormFieldCombobox",elements:[{name:"FormFieldIds"}],raw:"FormFieldCombobox<FormFieldIds>"},{name:"FormFieldMultipleCombobox",elements:[{name:"FormFieldIds"}],raw:"FormFieldMultipleCombobox<FormFieldIds>"},{name:"FormFieldRadioWithNestedOptions",elements:[{name:"FormFieldIds"}],raw:"FormFieldRadioWithNestedOptions<FormFieldIds>"},{name:"FormFieldCheckboxWithNestedOptions",elements:[{name:"FormFieldIds"}],raw:"FormFieldCheckboxWithNestedOptions<FormFieldIds>"},{name:"FormFieldAsyncCombobox",elements:[{name:"FormFieldIds"}],raw:"FormFieldAsyncCombobox<FormFieldIds>"},{name:"FormFieldArray",elements:[{name:"FormFieldIds"},{name:"FormFieldIds"}],raw:"FormFieldArray<keyof FormFieldIds, FormFieldIds>"}]},{name:"FormFieldName",elements:[{name:"FormFieldIds"}],raw:"FormFieldName<FormFieldIds>"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},horizontalRadio:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},autocomplete:{required:!1,tsType:{name:"HTMLInputAutoCompleteAttribute"},description:""}}};var console=__webpack_require__("./node_modules/console-browserify/index.js");const Combobox_stories={title:"Combobox",component:ComboboxWrapper},ComboboxForm=()=>{const{formFields,form}=useConfigForm({type:{type:"combobox",label:"Velg type",description:"Velg en type",defaultValue:"alt1",options:[{label:"Alternativ 1",value:"alt1"},{label:"Alternativ 2",value:"alt2"}],rules:{required:"Du må velge type"}}});return(0,jsx_runtime.jsxs)("form",{onSubmit:form.handleSubmit((()=>console.log("submitting"))),style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,jsx_runtime.jsx)(FormField,{form,formField:formFields.type}),(0,jsx_runtime.jsx)(esm.$n,{variant:"primary",children:"Send inn"})]})},MultipleComboboxForm=()=>{const{formFields,form}=useConfigForm({type:{type:"combobox_multiple",label:"Velg type",description:"Velg en type",defaultValue:["alt1"],options:[{label:"Alternativ 1",value:"alt1"},{label:"Alternativ 2",value:"alt2"}],rules:{required:"Du må velge type"}}});return(0,jsx_runtime.jsxs)("form",{onSubmit:form.handleSubmit((()=>console.log("submitting"))),style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,jsx_runtime.jsx)(FormField,{form,formField:formFields.type}),(0,jsx_runtime.jsx)(esm.$n,{variant:"primary",children:"Send inn"})]})},__namedExportsOrder=["ComboboxForm","MultipleComboboxForm"];ComboboxForm.parameters={...ComboboxForm.parameters,docs:{...ComboboxForm.parameters?.docs,source:{originalSource:"() => {\n  const {\n    formFields,\n    form\n  } = useConfigForm<FormFields>({\n    type: {\n      type: 'combobox',\n      label: 'Velg type',\n      description: 'Velg en type',\n      defaultValue: 'alt1',\n      options: [{\n        label: 'Alternativ 1',\n        value: 'alt1'\n      }, {\n        label: 'Alternativ 2',\n        value: 'alt2'\n      }],\n      rules: {\n        required: 'Du må velge type'\n      }\n    }\n  });\n  return <form onSubmit={form.handleSubmit(() => console.log('submitting'))} style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem'\n  }}>\n      <FormField form={form} formField={formFields.type} />\n      <Button variant={'primary'}>Send inn</Button>\n    </form>;\n}",...ComboboxForm.parameters?.docs?.source}}},MultipleComboboxForm.parameters={...MultipleComboboxForm.parameters,docs:{...MultipleComboboxForm.parameters?.docs,source:{originalSource:"() => {\n  const {\n    formFields,\n    form\n  } = useConfigForm<FormFields>({\n    type: {\n      type: 'combobox_multiple',\n      label: 'Velg type',\n      description: 'Velg en type',\n      defaultValue: ['alt1'],\n      options: [{\n        label: 'Alternativ 1',\n        value: 'alt1'\n      }, {\n        label: 'Alternativ 2',\n        value: 'alt2'\n      }],\n      rules: {\n        required: 'Du må velge type'\n      }\n    }\n  });\n  return <form onSubmit={form.handleSubmit(() => console.log('submitting'))} style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem'\n  }}>\n      <FormField form={form} formField={formFields.type} />\n      <Button variant={'primary'}>Send inn</Button>\n    </form>;\n}",...MultipleComboboxForm.parameters?.docs?.source}}}}}]);