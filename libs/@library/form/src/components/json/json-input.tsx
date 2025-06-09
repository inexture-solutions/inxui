import React from "react";
import { JsonInput as BaseJsonInput } from "@inexture/core";
import { Controller, useFormContext } from "react-hook-form";
import type { JsonInputI } from "../../types/type.ts";

const JsonInput: React.FC<JsonInputI> = ({ name, label, props }) => {
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
          <BaseJsonInput
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

export { JsonInput };
