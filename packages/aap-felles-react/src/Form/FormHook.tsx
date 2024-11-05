import { DefaultValues, RegisterOptions, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { FieldPath, FieldValues } from 'react-hook-form/dist/types';

import { ValuePair } from './FormField';

export type FormFieldsConfig<FormFieldId extends FieldPath<FormFieldIds>, FormFieldIds extends FieldValues> = Record<
  FormFieldId,
  FormFieldConfig<FormFieldIds>
>;

export type FormFieldConfig<FormFieldIds extends FieldValues> =
  | FormFieldText<FormFieldIds>
  | FormFieldDate<FormFieldIds>
  | FormFieldDateInput<FormFieldIds>
  | FormFieldWithOptions<FormFieldIds>
  | FormFieldSelect<FormFieldIds>
  | FormFieldCheckbox<FormFieldIds>
  | FormFieldCombobox<FormFieldIds>
  | FormFieldMultipleCombobox<FormFieldIds>
  | FormFieldRadioWithNestedOptions<FormFieldIds>
  | FormFieldCheckboxWithNestedOptions<FormFieldIds>
  | FormFieldArray<keyof FormFieldIds, FormFieldIds>;

interface BaseFormField<FormFieldIds extends FieldValues> {
  label?: string;
  description?: string;
  rules?: RegisterOptions<FormFieldIds>;
  readOnly?: boolean;
}

interface FormFieldArray<FormFieldId extends keyof FormFieldIds, FormFieldIds extends FieldValues>
  extends BaseFormField<FormFieldIds> {
  type: 'fieldArray';
  defaultValue?: FormFieldIds[FormFieldId];
}

interface FormFieldText<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'text' | 'number' | 'textarea';
  defaultValue?: string;
  hideLabel?: boolean;
}

interface FormFieldDate<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'date';
  fromDate?: Date;
  toDate?: Date;
  defaultValue?: Date;
  disableWeekends?: boolean;
  hideLabel?: boolean;
  strategy?: 'fixed' | 'absolute';
}

interface FormFieldDateInput<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'date_input';
  defaultValue?: string;
}

interface FormFieldWithOptions<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'radio';
  options: string[] | ValuePair[];
  defaultValue?: string;
}

interface FormFieldCombobox<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'combobox';
  options: string[] | ValuePair[];
  defaultValue?: string;
}

interface FormFieldMultipleCombobox<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'combobox_multiple';
  options: string[] | ValuePair[];
  defaultValue?: string[];
}

interface FormFieldCheckbox<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'checkbox';
  options: Array<string | ValuePair>;
  defaultValue?: Array<string>;
}

interface FormFieldSelect<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'select';
  options: Array<string | ValuePair>;
  defaultValue?: string;
  hideLabel?: boolean;
}

interface FormFieldRadioWithNestedOptions<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'radio_nested';
  defaultValue?: string;
}

interface FormFieldCheckboxWithNestedOptions<FormFieldIds extends FieldValues> extends BaseFormField<FormFieldIds> {
  type: 'checkbox_nested';
  defaultValue?: string[];
}

export type FormFields<FormFieldId extends FieldPath<FormFieldIds>, FormFieldIds extends FieldValues> = Record<
  FormFieldId,
  FormFieldType<FormFieldIds>
>;

export type FormFieldType<FormFieldIds extends FieldValues> = FormFieldConfig<FormFieldIds> &
  FormFieldName<FormFieldIds>;

interface FormFieldName<FormFieldIds extends FieldValues> {
  name: FieldPath<FormFieldIds>;
}

type ReactFormHookConfiguration<FormFieldIds extends FieldValues> = Omit<
  UseFormProps<FormFieldIds>,
  'defaultValues'
> & { readOnly?: boolean };

export function useConfigForm<FormFieldIds extends FieldValues>(
  config: FormFieldsConfig<FieldPath<FormFieldIds>, FormFieldIds>,
  rfhConfig?: ReactFormHookConfiguration<FormFieldIds>
): {
  formFields: FormFields<FieldPath<FormFieldIds>, FormFieldIds>;
  form: UseFormReturn<FormFieldIds>;
} {
  const defaultValues = {} as DefaultValues<FormFieldIds>[FieldPath<FormFieldIds>];
  const formFields = {} as FormFields<FieldPath<FormFieldIds>, FormFieldIds>;

  const entries = Object.entries(config) as Array<[FieldPath<FormFieldIds>, FormFieldConfig<FormFieldIds>]>;

  entries.forEach(([id, formFieldConfig]) => {
    if (formFieldConfig.type !== 'fieldArray') {
      formFields[id] = { ...formFieldConfig, name: id, readOnly: rfhConfig?.readOnly };
    }

    if (formFieldConfig.defaultValue) {
      defaultValues[id] = formFieldConfig.defaultValue;
    }
  });

  const form = useForm<FormFieldIds>({
    ...rfhConfig,
    defaultValues,
  });

  return { formFields, form };
}
