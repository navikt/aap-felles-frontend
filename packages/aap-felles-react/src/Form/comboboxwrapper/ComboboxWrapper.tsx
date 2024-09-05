import { UNSAFE_Combobox } from '@navikt/ds-react';
import React, { ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { FieldPath, FieldValues } from 'react-hook-form/dist/types';
import { ValuePair } from '../FormField';

interface ComboboxProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  label?: string;
  control: Control<FormFieldValues>;
  rules?: RegisterOptions<FormFieldValues>;
  description?: ReactNode;
  readOnly?: boolean;
  options: string[] | ValuePair[];
}

const ComboboxWrapper = <FormFieldValues extends FieldValues>({
  name,
  label,
  control,
  rules,
  description,
  readOnly,
  options,
}: ComboboxProps<FormFieldValues>) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <UNSAFE_Combobox
        size={'small'}
        id={name}
        name={name}
        label={label}
        description={description}
        error={error?.message}
        options={options}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    )}
  />
);

export { ComboboxWrapper };
