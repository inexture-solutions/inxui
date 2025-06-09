import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ColorInput as BaseColorInput } from "@inexture/core";
import type { ColorInputI } from "../../types/type.ts";

const ColorInput: React.FC<ColorInputI> = ({ name, props, label }) => {
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
          <BaseColorInput
            ref={ref}
            value={value as string}
            label={label}
            onBlur={onBlur}
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

export { ColorInput };
