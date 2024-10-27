import type { FC } from "react";
import { DateInput as BaseDateInput } from "@inexture/dates";
import { Controller, useFormContext } from "react-hook-form";
import type { DateInputI } from "../../types";

const DateInput: FC<DateInputI> = ({ name, label, props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => {
        return (
          <BaseDateInput
            ref={ref}
            label={label}
            placeholder={`Select ${label ?? ""}`}
            error={error?.message}
            onBlur={onBlur}
            value={value as Date}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            data-test-id={
              props?.["data-test-id"] ? props["data-test-id"] : name
            }
            autoComplete="off"
            {...props}
          />
        );
      }}
    />
  );
};

export { DateInput };
