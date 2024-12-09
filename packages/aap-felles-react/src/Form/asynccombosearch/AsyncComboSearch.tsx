import React from 'react';
import { Controller, FieldPath, FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form';
import AsyncSelect from 'react-select/async';
import { ValuePair } from '../FormField';
import { ErrorMessage, Label } from '@navikt/ds-react';
import { customStyles } from './AsyncComboSearchStyling';

type Props<FormValues extends FieldValues> = {
  form: UseFormReturn<FormValues>;
  name: FieldPath<FormValues>;
  label: string;
  fetcher: (input: string) => Promise<ValuePair[]>;
  defaultOptions?: ValuePair[] | boolean;
  isMulti?: boolean;
  rules?: RegisterOptions<FormValues>;
  size?: 'small' | 'medium';
};

export const AsyncComboSearch = <FormValues extends FieldValues>({
  form,
  name,
  label,
  fetcher,
  defaultOptions,
  isMulti = false,
  rules,
  size = 'medium',
}: Props<FormValues>) => (
  <Controller
    name={name}
    control={form.control}
    rules={rules}
    render={({ field, fieldState }) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label size={size} htmlFor={name}>
          {label}
        </Label>
        <AsyncSelect
          inputId={name}
          isMulti={isMulti}
          placeholder=""
          isClearable
          onChange={(value) => {
            field.onChange(value);
          }}
          loadingMessage={() => 'Søker...'}
          noOptionsMessage={() => 'Ingen treff'}
          loadOptions={fetcher}
          defaultOptions={defaultOptions}
          styles={customStyles}
        />
        {fieldState.error && <ErrorMessage size={'small'}>{fieldState.error.message}</ErrorMessage>}
      </div>
    )}
  />
);
