import { Control, Controller, RegisterOptions } from 'react-hook-form';
import React, { ReactNode } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form/dist/types';
import { UNSAFE_Combobox } from '@navikt/ds-react';
import { ValuePair } from '../FormField';

interface ComboboxProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  control: Control<FormFieldValues>;
  options: ValuePair[];
  isMultiSelect?: boolean;
  label?: string;
  rules?: RegisterOptions<FormFieldValues>;
  description?: ReactNode;
  readOnly?: boolean;
  className?: string;
}

const MultipleComboboxWrapper = <FormFieldValues extends FieldValues>({
  name,
  label,
  control,
  rules,
  description,
  readOnly,
  options,
  className,
}: ComboboxProps<FormFieldValues>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <UNSAFE_Combobox
            id={name}
            label={label}
            options={options}
            isMultiSelect
            description={description}
            error={fieldState.error?.message}
            readOnly={readOnly}
            className={className}
            selectedOptions={field.value.map((value) => {
              const option = options.find((option) => option.value === value);
              if (option) {
                return option.label;
              }
            })}
            ref={field.ref}
            name={field.name}
            size={'small'}
            onBlur={field.onBlur}
            onToggleSelected={(option, isSelected) => {
              if (isSelected) {
                field.onChange([...(field.value || []), option]);
              } else {
                field.onChange(field.value.filter((v: string) => v !== option));
              }
            }}
          />
        );
      }}
    />
  );
};

export { MultipleComboboxWrapper };
