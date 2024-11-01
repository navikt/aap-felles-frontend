import { DatePicker, useDatepicker } from '@navikt/ds-react';
import { subYears, addYears } from 'date-fns';
import React from 'react';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

export interface DateProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  label?: string;
  description?: React.ReactNode;
  disableWeekend?: boolean;
  rules?: RegisterOptions<FormFieldValues>;
  control: Control<FormFieldValues>;
  fromDate?: Date;
  toDate?: Date;
  hideLabel?: boolean;
  selected?: Date;
  readOnly?: boolean;
  strategy?: 'absolute' | 'fixed';
}

const FRA_DATO = subYears(new Date(), 80);
const TIL_DATO = addYears(new Date(), 80);

export const DateWrapper = <FormFieldValues extends FieldValues>({
  name,
  label,
  description,
  control,
  rules,
  disableWeekend = false,
  hideLabel,
  fromDate = FRA_DATO,
  toDate = TIL_DATO,
  selected,
  readOnly,
  strategy,
}: DateProps<FormFieldValues>) => {
  const { datepickerProps, inputProps } = useDatepicker({ defaultSelected: selected });

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { name, value, onChange }, fieldState: { error } }) => {
        return (
          <DatePicker
            id={name}
            onChange={onChange}
            onSelect={onChange}
            {...datepickerProps}
            disableWeekends={disableWeekend}
            dropdownCaption
            fromDate={fromDate}
            toDate={toDate}
            strategy={strategy}
          >
            <DatePicker.Input
              onChange={onChange}
              onInput={onChange}
              size={'small'}
              value={value}
              name={name}
              hideLabel={hideLabel}
              description={description}
              error={error && error.message}
              label={label}
              readOnly={readOnly}
              {...inputProps}
            />
          </DatePicker>
        );
      }}
    />
  );
};
