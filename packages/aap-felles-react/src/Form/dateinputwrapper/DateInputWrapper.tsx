import { TextField } from '@navikt/ds-react';
import React from 'react';
import { ReactNode } from 'react';
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export type DateInputWrapperProps<FormFieldValues extends FieldValues> = {
  name: FieldPath<FormFieldValues>;
  label?: string;
  control: Control<FormFieldValues>;
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
  className,
}: DateInputWrapperProps<FormFieldValues>) => {
  const classNames = `aap_date_input ${className}`;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { name, value, onChange }, fieldState: { error } }) => (
        <TextField
          id={name}
          name={name}
          size={'small'}
          label={label}
          type={'text'}
          error={error?.message}
          value={value || ''}
          onChange={onChange}
          description={description}
          readOnly={readOnly}
          className={classNames}
        />
      )}
    />
  );
};
