import { UNSAFE_Combobox } from '@navikt/ds-react';
import React, { ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { FieldPath, FieldValues } from 'react-hook-form/dist/types';
import { ValuePair } from '../FormField';

interface ComboboxProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  control: Control<FormFieldValues>;
  options: ValuePair[];
  hideLabel?: boolean;
  label?: string;
  rules?: RegisterOptions<FormFieldValues>;
  description?: ReactNode;
  readOnly?: boolean;
  className?: string;
}

const ComboboxWrapper = <FormFieldValues extends FieldValues>({
  name,
  label,
  control,
  hideLabel,
  rules,
  description,
  readOnly,
  options,
  className,
}: ComboboxProps<FormFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <UNSAFE_Combobox
          shouldAutocomplete={false}
          size={'small'}
          id={name}
          name={name}
          label={label}
          hideLabel={hideLabel}
          description={description}
          error={error?.message}
          options={options}
          onToggleSelected={onChange}
          selectedOptions={[options.find((option) => option.value === value)?.label ?? '']}
          readOnly={readOnly}
          className={className}
        />
      )}
    />
  );
};

export { ComboboxWrapper };
