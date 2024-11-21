import { TextField } from '@navikt/ds-react';
import React from 'react';
import { ReactNode } from 'react';
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { mapShortDateToDateString } from './dateMapper';

export type DateInputWrapperProps<FormFieldValues extends FieldValues> = {
  name: FieldPath<FormFieldValues>;
  control: Control<FormFieldValues>;
  label?: string;
  hideLabel?: boolean;
  size?: 'small' | 'medium';
  description?: ReactNode;
  rules?: RegisterOptions<FormFieldValues>;
  readOnly?: boolean;
  className?: string;
};

export const DateInputWrapper = <FormFieldValues extends FieldValues>({
  name,
  label,
  control,
  description,
  rules,
  readOnly,
  size = 'small',
  className,
  hideLabel,
}: DateInputWrapperProps<FormFieldValues>) => {
  const classNames = `aap_date_input ${className}`;
  const transform = (input: React.FormEvent<HTMLInputElement>) => mapShortDateToDateString(input.currentTarget.value);

  return (
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
          hideLabel={hideLabel}
          type={'text'}
          error={error?.message}
          value={value || ''}
          onChange={(value) => onChange(transform(value))}
          description={description}
          readOnly={readOnly}
          className={classNames}
        />
      )}
    />
  );
};
