import { TextField } from '@navikt/ds-react';
import React from 'react';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

export interface TextFieldProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  label?: string;
  hideLabel?: boolean;
  control: Control<FormFieldValues>;
  type: 'text' | 'number';
  size?: 'small' | 'medium';
  description?: React.ReactNode;
  rules?: RegisterOptions<FormFieldValues>;
  readOnly?: boolean;
  className?: string;
}

export const TextFieldWrapper = <FormFieldValues extends FieldValues>({
  name,
  label,
  hideLabel,
  control,
  type,
  description,
  size = 'small',
  rules,
  readOnly,
  className,
}: TextFieldProps<FormFieldValues>) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { name, value, onChange }, fieldState: { error } }) => (
      <TextField
        id={name}
        name={name}
        size={size}
        label={label}
        type={type}
        error={error?.message}
        hideLabel={hideLabel}
        value={value || ''}
        onChange={onChange}
        description={description}
        readOnly={readOnly}
        className={className}
      />
    )}
  />
);
