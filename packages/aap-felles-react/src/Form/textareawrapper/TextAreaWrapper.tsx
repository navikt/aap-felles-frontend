import { Textarea } from '@navikt/ds-react';
import React, { HTMLInputAutoCompleteAttribute } from 'react';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

export interface TextAreaProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  description?: React.ReactNode;
  label?: string;
  hideLabel?: boolean;
  rules?: RegisterOptions<FormFieldValues>;
  size?: 'small' | 'medium';
  control: Control<FormFieldValues>;
  maxLength?: number;
  readOnly?: boolean;
  className?: string;
  autocomplete?: HTMLInputAutoCompleteAttribute;
}

export const TextAreaWrapper = <FormFieldValues extends FieldValues>({
  name,
  description,
  label,
  control,
  size = 'small',
  maxLength,
  hideLabel,
  rules,
  readOnly,
  className,
  autocomplete,
}: TextAreaProps<FormFieldValues>) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { name, value, onChange }, fieldState: { error } }) => (
      <Textarea
        id={name}
        label={label}
        size={size}
        description={description}
        value={value}
        onChange={onChange}
        hideLabel={hideLabel}
        error={error?.message}
        name={name}
        maxLength={maxLength}
        readOnly={readOnly}
        className={className}
        autoComplete={autocomplete}
      />
    )}
  />
);
