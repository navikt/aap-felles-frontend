//import { Checkbox, Radio } from '@navikt/ds-react';
import React, { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';

import { FormFieldType } from './FormHook';
import { TextFieldWrapper } from './textfieldwrapper/TextFieldWrapper';
import { TextAreaWrapper } from './textareawrapper/TextAreaWrapper';

export interface ValuePair<Enum = string> {
  value: Enum;
  label: string;
}

interface Props<FormFieldIds extends FieldValues> {
  form: UseFormReturn<FormFieldIds>;
  formField: FormFieldType<FormFieldIds>;
  children?: ReactNode;
  horizontalRadio?: boolean;
}

export const FormField = <FormFieldIds extends FieldValues>(props: Props<FormFieldIds>) => {
  const { formField, form /*, children, horizontalRadio */ } = props;

  return (
    <>
      {(formField.type === 'text' || formField.type === 'number') && (
        <TextFieldWrapper
          name={formField.name}
          label={formField.label}
          type={formField.type}
          control={form.control}
          rules={formField.rules}
          description={formField.description}
          readOnly={formField.readOnly}
        />
      )}
      {formField.type === 'textarea' && (
        <TextAreaWrapper
          name={formField.name}
          label={formField.label}
          control={form.control}
          rules={formField.rules}
          description={formField.description}
          readOnly={formField.readOnly}
        />
      )}
    </>
  );
};
