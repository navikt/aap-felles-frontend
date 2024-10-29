import { Select } from '@navikt/ds-react';
import React, { ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { FieldPath, FieldValues } from 'react-hook-form/dist/types';

export interface SelectProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  label?: string;
  control: Control<FormFieldValues>;
  children: React.ReactNode;
  hideLabel?: boolean;
  rules?: RegisterOptions<FormFieldValues>;
  description?: ReactNode;
  readOnly?: boolean;
  className?: string;
}

export const SelectWrapper = <FormFieldValues extends FieldValues>({
  name,
  label,
  control,
  rules,
  description,
  hideLabel,
  children,
  readOnly,
  className,
}: SelectProps<FormFieldValues>) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { name, value, onChange }, fieldState: { error } }) => (
      <Select
        id={name}
        name={name}
        size={'small'}
        label={label}
        description={description}
        value={value}
        hideLabel={hideLabel}
        onChange={onChange}
        error={error?.message}
        readOnly={readOnly}
        className={className}
      >
        {children}
      </Select>
    )}
  />
);
