import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Textarea as BaseTextarea } from "@inexture/base";
import type { TextAreaI } from "../../types/type.ts";

const Textarea: React.FC<TextAreaI> = ({
  name,
  placeholder,
  label,
  props,
  disabled,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <BaseTextarea
          ref={ref}
          label={label}
          onBlur={onBlur}
          value={value as string}
          disabled={disabled}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          data-test-id={props?.["data-test-id"] ? props["data-test-id"] : name}
          autosize
          placeholder={
            placeholder ? placeholder : label ? `Enter ${label}` : ""
          }
          error={error?.message}
          {...props}
        />
      )}
    />
  );
};

export { Textarea };
