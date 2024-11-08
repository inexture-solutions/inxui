import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { DatePickerProps as BaseDatePickerProps } from "@inexture/dates";
import { DatePicker as BaseDatePicker } from "@inexture/dates";

interface DatePickerProps
  extends Omit<BaseDatePickerProps, "value" | "onChange"> {
  name: string;
}

const DatePicker: FC<DatePickerProps> = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <BaseDatePicker
          ref={ref}
          onBlur={onBlur}
          value={value ? new Date(value) : null}
          onChange={(val) => {
            onChange(val);
          }}
          {...props}
        />
      )}
    />
  );
};

export { DatePicker };
