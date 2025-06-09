import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput as BaseInput } from "@inexture/core";
import { TextInputI } from "../../types/type.ts";

const TextInput: React.FC<TextInputI> = ({ name, label, props }) => {
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
          <BaseInput
            autoComplete="off"
            error={error?.message}
            label={label}
            onBlur={onBlur}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            placeholder={
              props?.placeholder
                ? props.placeholder
                : label
                  ? `Enter ${label}`
                  : ""
            }
            ref={ref}
            value={value as string}
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

export { TextInput };
