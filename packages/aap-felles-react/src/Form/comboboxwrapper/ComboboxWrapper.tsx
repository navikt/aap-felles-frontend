import { UNSAFE_Combobox } from '@navikt/ds-react';
import React, { ReactNode, useState } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { FieldPath, FieldValues } from 'react-hook-form/dist/types';
import { ValuePair } from '../FormField';

interface ComboboxProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  control: Control<FormFieldValues>;
  options: string[] | ValuePair[];
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
  rules,
  description,
  readOnly,
  options,
  className,
}: ComboboxProps<FormFieldValues>) => {
  const [searchValue, setSearchValue] = useState('');

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
          description={description}
          error={error?.message}
          options={options}
          value={searchValue}
          onChange={setSearchValue}
          onToggleSelected={onChange}
          selectedOptions={[value ?? '']}
          readOnly={readOnly}
          className={className}
        />
      )}
    />
  );
};

export { ComboboxWrapper };
