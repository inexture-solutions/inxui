import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { NumberInput as BaseNumberInput } from "@inexture/base";
import type { NumberInputI } from "../../types";

const NumberInput: React.FC<NumberInputI> = ({ name, label, props }) => {
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
          <BaseNumberInput
            ref={ref}
            value={value as number}
            label={label}
            onBlur={onBlur}
            placeholder={
              props?.placeholder
                ? props.placeholder
                : label
                  ? `Enter ${label}`
                  : ""
            }
            error={error?.message}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            data-test-id={
              props?.["data-test-id"] ? props["data-test-id"] : name
            }
            {...props}
          />
        );
      }}
    />
  );
};

export { NumberInput };
